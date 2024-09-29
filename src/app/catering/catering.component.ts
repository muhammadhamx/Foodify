import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DineInComponent } from "../dine-in/dine-in.component";
import { TakeAwayComponent } from "../take-away/take-away.component";
import { HomeDeliveryComponent } from "../home-delivery/home-delivery.component";


@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [FormsModule, RouterLink, DineInComponent, TakeAwayComponent, HomeDeliveryComponent],
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.scss'
})
export class CateringComponent  {
  selectedTab = ''

}
