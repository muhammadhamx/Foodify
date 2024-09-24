import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Item {
  pic: string;
  id: string;
  name: string;
  price: number;
}
interface Order {
  name : string,
  quantity: number,
  price: number,
  totalPrice : number
}
@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.scss'
})
export class CateringComponent  {


  floors = ['Floor 1', 'Floor 2', 'Floor 3'];
  dropdownOpen = false;
  selectedFloor : string = 'Floor 1';
  reserve :boolean = true;
  badge : string = 'Free';
  firstFloor = [];
  searchItemTxt : any = ''
  filteredItems: any = [[]];
  rows: Order[] = [];
  grandTotal: any= '';

  orderPlaced = false 
  items: Item[] = [
    { pic: '../../assets/images/items/burger.jpg', id: '1', name: 'burger', price: 200 },
    { pic: '../../assets/images/items/burger.jpg', id: '2', name: 'pizza', price: 800 },
    { pic: '../../assets/images/items/burger.jpg', id: '3', name: 'pasta', price: 200 },
    { pic: '../../assets/images/items/burger.jpg', id: '4', name: 'biryani', price: 800 },
    { pic: '../../assets/images/items/burger.jpg', id: '5', name: '1002B', price: 1700 }

  ];



  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;

  }

  selectFloor(item: any){
    this.selectedFloor = item;
      this.dropdownOpen = false;
      console.log('Selected Item: ', this.selectedFloor)
  }

  toggleBadge(){
    this.badge = this.reserve ? 'Reserved' : 'Empty';
    this.reserve = !this.reserve
  }

  onSearch(searchValue: any){
    if (searchValue) {
      this.filteredItems = this.items.filter(item => {
        return item.name.toLowerCase().includes(searchValue.value.toLowerCase());
      })
    } else {
      this.filteredItems = this.items
    }
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

    this.calculateGrandTotal();
  }

  deleteRow(rowIndex: number) {
    this.rows.splice(rowIndex, 1);  // Remove the row from the array
    this.filteredItems.splice(rowIndex, 1);  // Also remove its filtered items array
    this.calculateGrandTotal();
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

    calculateGrandTotal() {
      this.grandTotal = this.rows.reduce((sum: any, row: { totalPrice: any; }) => {
        return sum + (row.totalPrice || 0);
      }, 0);
    }

}
