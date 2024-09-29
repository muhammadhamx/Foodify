import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-owner-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './owner-information.component.html',
  styleUrl: './owner-information.component.scss'
})
export class OwnerInformationComponent {
status: string = 'bg-primary';
  ownerForm !: FormGroup;
  @Output() toggle = new EventEmitter<void>(); 

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.ownerForm = this.fb.group({
    photo: ['', Validators.required],
    fullName: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', ],
    emergencyContact: [''],
  });
}
onToggleBackground() {
  this.toggle.emit();
}
onSubmit(): void {
  if (this.ownerForm.valid) {
    console.log(this.ownerForm.value);
    this.onToggleBackground()
  } else {
    this.ownerForm.markAllAsTouched(); // Show validation errors
  }
}


}
