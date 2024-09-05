import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({})
  isAddEmployee: boolean = true
  Employees: Array<User> = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: 1234567890,
      role: 'owner',
      picture: 'https://example.com/images/john.jpg',
      status: true
    },
    {
      id: '2',
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      phoneNumber: 2345678901,
      role: 'waiter',
      picture: 'https://example.com/images/alice.jpg',
      status: true

    },
    {
      id: '3',
      name: 'Carlos Martinez',
      email: 'carlos.martinez@example.com',
      phoneNumber: 3456789012,
      role: 'chef',
      picture: 'https://example.com/images/carlos.jpg',
      status: false

    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phoneNumber: 4567890123,
      role: 'waiter',
      picture: null, // No picture available
      status: true

    },
    {
      id: '5',
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      phoneNumber: 5678901234,
      role: 'chef',
      status: false
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.employeeForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phoneNumber:['', Validators.required],
      role:['waiter', Validators.required],
      roleDes:['', Validators.required]
    })
  }

  submitForm() {
    console.log(this.employeeForm.value)
  }
}
