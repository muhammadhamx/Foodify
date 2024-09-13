import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

    cards: any[] = [];
    cardData: any[] = [
    {
      title: "Burger",
      description: "Juicy beef patty, toasted bun, cheese, lettuce, tomato, and special sauce.",
      price: 12.99,
      image: "../../assets/images/items/burger.jpg"
    },
    {
      title: "Pizza",
      description: "Pepperoni, mushrooms, onions, and cheese on a crispy crust.",
      price: 15.99,
      image: "../../assets/images/items/pizza.jpg"
    },
    {
      title: "Pasta",
      description: "Spaghetti with marinara sauce and meatballs.",
      price: 9.99,
      image: "../../assets/images/items/pasta.jpg"
    },
    {
      title: "Salad",
      description: "Mixed greens, grilled chicken, avocado, and balsamic vinaigrette.",
      price: 8.99,
      image: "../../assets/images/items/salad.jpg"
    },
    {
      title: "Steak",
      description: "Grilled steak with mashed potatoes and asparagus.",
      price: 24.99,
      image: "../../assets/images/items/steak.jpg"
    }
  ];
  
  itemForm: FormGroup = new FormGroup({})
  isAddItems: boolean = true
constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.cards = this.cardData;
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
