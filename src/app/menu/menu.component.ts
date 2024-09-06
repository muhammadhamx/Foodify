import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  itemForm: FormGroup = new FormGroup({})
  isAddItems: boolean = true
constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.itemForm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      picture:[''],
      price:['', Validators.required],
    })
  }

  submitForm() {
    console.log(this.itemForm.value)
  }



}
