import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resturant-information',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resturant-information.component.html',
  styleUrl: './resturant-information.component.scss'
})
export class ResturantInformationComponent {
  @Output() toggle = new EventEmitter<void>(); 
  @Output() goBack = new EventEmitter<void>();

  restaurantForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.restaurantForm = this.fb.group({
      restaurantName: ['', Validators.required],
      restaurantPhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      restaurantEmail: ['', [Validators.required, Validators.email]],
      cuisineType: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      deliveryAvailable: [false],
      restaurantDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.restaurantForm.valid) {
      console.log('Restaurant Information:', this.restaurantForm.value);
      this.onToggleBackground()
    }
  }


  
  onToggleBackground() {
    this.toggle.emit();
  }
  goBackward() {
    this.goBack.emit(); 
  }
  
}
