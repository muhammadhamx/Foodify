import { Component } from '@angular/core';

interface Item {
  pic: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [],
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.scss'
})
export class CateringComponent {

  floors = ['Floor 1', 'Floor 2', 'Floor 3'];
  dropdownOpen = false;
  selectedFloor : string = 'Floor 1';
  reserve :boolean = true;
  badge : string = 'Free';
  firstFloor = [];
  searched : any;

  items : Item[] = [
    { pic: '../../assets/images/items/burger.jpg',name: 'burger', price: 200 },
    { pic: '../../assets/images/items/burger.jpg',name: 'pizza', price: 800 },
    { pic: '../../assets/images/items/burger.jpg',name: 'pasta', price: 200 },
    { pic: '../../assets/images/items/burger.jpg',name: 'biryani', price: 800 }
  ];

  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;

  }

  selectFloor(item: any){
    this.selectedFloor = item;
      this.dropdownOpen = false;
      console.log('Selected Item: ', this.selectedFloor)
  }

  toggleBadge(){
    this.badge = this.reserve ? 'Reserved' : 'Empty';
    this.reserve = !this.reserve
  }

  onSearch(){

  }

}
