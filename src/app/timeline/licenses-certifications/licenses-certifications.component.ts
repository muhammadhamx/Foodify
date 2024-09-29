import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-licenses-certifications',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './licenses-certifications.component.html',
  styleUrl: './licenses-certifications.component.scss'
})
export class LicensesCertificationsComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() goBack = new EventEmitter<void>();

  licensesForm: FormGroup;
  showAlcoholFile: boolean = false;

  constructor(private fb: FormBuilder) {
    this.licensesForm = this.fb.group({
      businessLicense: ['', Validators.required],
      foodHandlingCertificate: [null, Validators.required],
      alcoholPermit: ['', Validators.required],
      alcoholFile: [''],
      healthSafetyCompliance: ['', Validators.required],
      taxId: ['', Validators.required],
      insuranceCertificate: [null, Validators.required],
    });
  }

  ngOnInit(): void { }

  onAlcoholPermitChange(value: boolean): void {
    this.showAlcoholFile = value;
    if (!value) {
      this.licensesForm.patchValue({ alcoholFile: null });
    }
  }

  onSubmit(): void {
    if (this.licensesForm.valid) {
      console.log('Licenses & Certifications form data:', this.licensesForm.value);
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
