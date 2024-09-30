import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
interface orders{
  personName: string,
  items: any
}
@Component({
  selector: 'app-take-away',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './take-away.component.html',
  styleUrl: './take-away.component.scss'
})
export class TakeAwayComponent {
  // Available items (replace with real data)
  availableItems = [
    { name: 'Pizza', price: 12 },
    { name: 'Burger', price: 8 },
    { name: 'Pasta', price: 10 },
    { name: 'Salad', price: 5 },
  ];

  filteredItems = [...this.availableItems];
  searchItemTxt = '';
  orderItems: any[] = [];
  grandTotal = 0;
  orders : orders[] = [
    {personName: 'Hamza', items: this.orderItems},
    {personName: 'Hamza', items: this.orderItems},
  ]
  
  button = false


  // Filter items based on search input
  onSearch(searchTerm: string) {
    this.filteredItems = searchTerm
      ? this.availableItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : [...this.availableItems];
  }

  // Add item to the order
  addToOrder(item: any) {
    const existingItem = this.orderItems.find((orderItem) => orderItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += item.price;
    } else {
      this.orderItems.push({
        ...item,
        quantity: 1,
        totalPrice: item.price,
      });
    }
    this.calculateGrandTotal();
  }

  // Remove item from the order
  removeFromOrder(index: number) {
    this.orderItems.splice(index, 1);
    this.calculateGrandTotal();
  }

  // Calculate the total price
  calculateGrandTotal() {
    this.grandTotal = this.orderItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
  }

  // Place order (customize for your needs)
  placeOrder() {
    if (this.orderItems.length > 0) {
      console.log('Order placed:', this.orderItems);
    } else {
      console.log('No items to place in the order.');
    }
  }

  toggelButtons(){
    this.button = !this.button;
  }

}
