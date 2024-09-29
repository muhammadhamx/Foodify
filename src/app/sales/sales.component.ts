import { Component, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  chart!: Chart
  resturanData = [
    {
      orderId: 'ORD001',
      totalPrice: 45.99,
      items: 'Pizza, Salad',
      paymentType: 'Credit Card',
      employeeId: 'EMP123',
      orderDate: new Date('2024-09-20'),
      lastUpdated: new Date('2024-09-20'),
    },
    {
      orderId: 'ORD002',
      totalPrice: 29.50,
      items: 'Burger, Fries',
      paymentType: 'Cash',
      employeeId: 'EMP124',
      orderDate: new Date('2024-09-21'),
      lastUpdated: new Date('2024-09-21'),
    },
    {
      orderId: 'ORD003',
      totalPrice: 75.30,
      items: 'Steak, Wine',
      paymentType: 'Debit Card',
      employeeId: 'EMP125',
      orderDate: new Date('2024-09-22'),
      lastUpdated: new Date('2024-09-22'),
    },
    {
      orderId: 'ORD004',
      totalPrice: 12.99,
      items: 'Coffee, Muffin',
      paymentType: 'Credit Card',
      employeeId: 'EMP126',
      orderDate: new Date('2024-09-22'),
      lastUpdated: new Date('2024-09-22'),
    },
    {
      orderId: 'ORD005',
      totalPrice: 53.60,
      items: 'Pasta, Soda',
      paymentType: 'Credit Card',
      employeeId: 'EMP123',
      orderDate: new Date('2024-09-23'),
      lastUpdated: new Date('2024-09-23'),
    },
    {
      orderId: 'ORD006',
      totalPrice: 34.20,
      items: 'Tacos, Guacamole',
      paymentType: 'Cash',
      employeeId: 'EMP127',
      orderDate: new Date('2024-09-24'),
      lastUpdated: new Date('2024-09-24'),
    },
  ];



  startDate: Date | null = null;
  endDate: Date | null = null;
  filteredData = this.resturanData;

  filterData() {
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
  
      // Filter the data
      this.filteredData = this.resturanData.filter(item => {
        const orderDate = new Date(item.orderDate);
        
        return orderDate >= startDate && orderDate <= endDate;
      });
  
      console.log('Filtered Data:', this.filteredData);
    } else {
      this.filteredData = this.resturanData;
      console.log('Resetting to original data');
    }
  }
  






  constructor(private elementRef: ElementRef) { }
  data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: 'Sales',
      data: [10, 30, 20, 40, 70, 60, 80, 120],
      backgroundColor: [
        // '#DDF2F2',
        '#FFE1E6'
      ],
      borderColor: [
        // '#6CDBDB',
        '#FF4069'
      ],
      borderWidth: 1
    }]
  };

  data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: 'Sales',
      data: [10, 30, 20, 40, 70, 60, 80, 120],
      backgroundColor: [
        '#DDF2F2',
        // '#FFE1E6'
      ],
      borderColor: [
        '#6CDBDB',
        // '#FF4069'
      ],
      borderWidth: 1
    }]
  };

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
    let htmlRef1 = this.elementRef.nativeElement.querySelector('#polarChart');
    new Chart(htmlRef, {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales of 2024'
          }
        }
      }
    });

    new Chart(htmlRef1, {
      type: 'bar',
      data: this.data1,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales of 2024'
          }
        }
      }
    });
  }







}
