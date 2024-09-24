import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


interface Item {
  pic: string;
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, FormsModule
  ],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent implements OnInit {


  deals: any = []

  items: Item[] = [
    { pic: '../../assets/images/items/burger.jpg', id: '1', name: 'burger', price: 200 },
    { pic: '../../assets/images/items/burger.jpg', id: '2', name: 'pizza', price: 800 },
    { pic: '../../assets/images/items/burger.jpg', id: '3', name: 'pasta', price: 200 },
    { pic: '../../assets/images/items/burger.jpg', id: '4', name: 'biryani', price: 800 },
  ];

  dealName: string = '';
  dealNumber: string | null = null;
  dealDescription: string = '';
  searchText: string = '';
  filteredItems: any = [[]];
  grandTotal: string = '';
  value: any;
  userPrice: string = '';
  searchItemTxt: string = ''


  // Initialize table rows
  rows: any = [];

  ngOnInit(): void {
    this.onSearch('')
  }
  // Adapted search logic for each row
  onSearch(searchValue: any) {
    if (searchValue) {
      this.filteredItems = this.items.filter(item => {
        return item.name.toLowerCase().includes(searchValue.value.toLowerCase());
      })
    } else {
      this.filteredItems = this.items
    }
  }

  // Method to select an item from suggestions
  selectItem(item: Item) {
    const idx = this.rows.findIndex((row: any) => row.id === item.id)
    if (idx > -1) {
      this.rows[idx].quantity += 1
      this.rows[idx].totalPrice += item.price
    } else {
      this.rows.push({ ...item, quantity: 1, totalPrice: item.price })
    }
    this.calculateGrandTotal();
  }

  updatePrice(rowIndex: any) {
    const row = this.rows[rowIndex];
    if (row.selectedItem) {
      row.totalPrice = row.selectedItem.price * row.quantity;
      // Update the filtered items array as well
      this.filteredItems[rowIndex] = this.filteredItems[rowIndex].map((item: Item) => {
        if (item.name === row.selectedItem?.name) {
          return { ...item, price: row.totalPrice };
        }
        return item;
      });
    }
    this.calculateGrandTotal();
  }

  calculateGrandTotal() {
    this.grandTotal = this.rows.reduce((sum: any, row: { totalPrice: any; }) => {
      return sum + (row.totalPrice || 0);
    }, 0);
  }

  onInputChange(value: any, rowIndex: number) {
    let row = this.rows[rowIndex];
    const number = value.value
    // Ensure an item is selected and the quantity is valid
    if (number > 0) {
      row.quantity = parseInt(number);  // Update the quantity
      row.totalPrice = row.price * row.quantity;  // Calculate new total price
    }
    console.log(value.value)
    console.log(value)
    this.rows[rowIndex] = row
    // Recalculate the grand total
    this.calculateGrandTotal();
  }

  deleteRow(rowIndex: number) {
    this.rows.splice(rowIndex, 1);  // Remove the row from the array
    this.filteredItems.splice(rowIndex, 1);  // Also remove its filtered items array
    this.calculateGrandTotal();  // Recalculate total price after deletion
  }

  createDeal() {
    const dealDetails = {
      name: this.dealName,
      number: this.dealNumber,
      description: this.dealDescription,
      items: this.rows.map((row: { selectedItem: { name: any; }; quantity: any; totalPrice: any; }) => ({
        name: row.selectedItem?.name || '',
        quantity: row.quantity,
        price: row.totalPrice
      })),
      totalPrice: this.grandTotal,
      discountedPrice: this.userPrice
    };
    this.deals.push(dealDetails)
    console.log('Deal Details:', dealDetails);
    this.resetForm()
    // Perform any action like sending this data to the server
    // For now, just log it to the console
  }
  resetForm() {
    this.dealName = ''
    this.dealNumber = ''
    this.dealDescription = ''
    this.rows = []
    this.grandTotal = ''
    this.userPrice = ''
    this.searchItemTxt = ''
    this.onSearch('')
  }
}



