import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { DealsComponent } from '../deals/deals.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemsComponent, DealsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {



}
