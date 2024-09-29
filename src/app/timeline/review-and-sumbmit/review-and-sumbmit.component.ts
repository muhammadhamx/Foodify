import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review-and-sumbmit',
  standalone: true,
  imports: [],
  templateUrl: './review-and-sumbmit.component.html',
  styleUrl: './review-and-sumbmit.component.scss'
})
export class ReviewAndSumbmitComponent {
  @Output() goBack = new EventEmitter<void>();

  ownerData: any;
  restaurantData: any;
  licensesData: any;
  reviewForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form
    this.reviewForm = this.formBuilder.group({});
  }

  ngOnInit() {
    // Mock data for demonstration; replace this with actual data retrieval logic
    this.ownerData = {
      fullName: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      emergencyContact: '987-654-3210',
    };

    this.restaurantData = {
      name: 'Doe’s Diner',
      address: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      cuisine: 'American',
      phone: '555-123-4567',
      email: 'info@doesdiner.com',
      deliveryAvailable: true,
      description: 'A cozy place to enjoy homemade meals.',
    };

    this.licensesData = {
      businessLicense: 'BL123456',
      taxId: 'TID789012',
      healthSafetyCompliance: 'HSC345678',
      foodHandlingCertificate: true,
      alcoholPermit: 'yes',
      alcoholFile: true,
      insuranceCertificate: true,
      businessPlan: true,
    };
  }

  onSubmit() {
    // Handle the form submission logic
    console.log('Registration submitted:', {
      ownerData: this.ownerData,
      restaurantData: this.restaurantData,
      licensesData: this.licensesData,
    });
    // You can also call a service to send this data to your backend
  }
  goBackward() {
    this.goBack.emit(); 
  }
}
