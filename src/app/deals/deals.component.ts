import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


interface Item {
  pic: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule,FormsModule
  ],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {

  deals:any = []
  
 items : Item[] = [
    { pic: '../../assets/images/items/burger.jpg',name: 'burger', price: 200 },
    { pic: '../../assets/images/items/burger.jpg',name: 'pizza', price: 800 },
    { pic: '../../assets/images/items/burger.jpg',name: 'pasta', price: 200 },
    { pic: '../../assets/images/items/burger.jpg',name: 'biryani', price: 800 }
  ];

  dealName: string = '';
dealNumber: number | null = null;
dealDescription: string = '';
  searchText: string = '';
  filteredItems: any = [[]];
  grandTotal: number = 0;
  value: any;
  userPrice: number = 0;


   // Initialize table rows
   rows = [{
    searchText: '',
    selectedItem: null as Item | null,
    quantity: 1,
    totalPrice: 0
  }];


  // Adapted search logic for each row
  onSearch(searchValue: any, rowIndex: number) {
    this.filteredItems = this.items.filter(item => {
           return item.name.toLowerCase().includes(searchValue.value.toLowerCase());
    })
    this.filteredItems[rowIndex] = this.items.filter(item => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

   // Method to select an item from suggestions
   selectItem(item: Item, rowIndex: number) {
    this.rows[rowIndex].selectedItem = item;
    this.rows[rowIndex].searchText = item.name; // Set search text to the item name
    this.updatePrice(rowIndex);
    this.filteredItems[rowIndex] = []; // Hide suggestions after selection
    this.addRow()
  }

  updatePrice(rowIndex : any) {
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
    this.grandTotal = this.rows.reduce((sum, row) => {
      return sum + (row.totalPrice || 0);
    }, 0);
  }
  updateWithUserPrice() {
    this.calculateGrandTotal(); // Recalculate total price with user input
  }

  // Method to add a new row for the next item
  addRow() {
    debugger
    this.rows.push({
      searchText: '',
      selectedItem: null,
      quantity: 1,
      totalPrice: 0
    });
    this.filteredItems.push([]); 
  }

onInputChange(value: any, rowIndex: number) {
  const row = this.rows[rowIndex];
  const number = value.value
  // Ensure an item is selected and the quantity is valid
  if (row.selectedItem && number > 0) {
    row.quantity = number;  // Update the quantity
    row.totalPrice = row.selectedItem.price * row.quantity;  // Calculate new total price
  }
  console.log(value.value)
console.log(value)
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
    items: this.rows.map(row => ({
      name: row.selectedItem?.name || '',
      quantity: row.quantity,
      price: row.totalPrice
    })),
    totalPrice: this.grandTotal,
    discountedPrice: this.userPrice
  };
  this.deals.push(dealDetails)
  console.log('Deal Details:', dealDetails);
  
  // Perform any action like sending this data to the server
  // For now, just log it to the console
}
}



