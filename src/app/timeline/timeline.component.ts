import { Component } from '@angular/core';
import { OwnerInformationComponent } from "./owner-information/owner-information.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResturantInformationComponent } from "./resturant-information/resturant-information.component";
import { ReviewAndSumbmitComponent } from "./review-and-sumbmit/review-and-sumbmit.component";
import { LicensesCertificationsComponent } from "./licenses-certifications/licenses-certifications.component";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [OwnerInformationComponent, RouterLink, RouterOutlet, ResturantInformationComponent, ReviewAndSumbmitComponent, LicensesCertificationsComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  isOwnerDetailsCompleted = true;
  isRestaurantDetailsCompleted = false;
  isContactInformationCompleted = false;
  

  onOwnerDetailsCompleted() {
    this.isOwnerDetailsCompleted = !this.isOwnerDetailsCompleted;
  }
  goBackToOwner(){
    this.isOwnerDetailsCompleted = false;
  }
  onRestaurantDetailsCompleted() {
    this.isRestaurantDetailsCompleted = !this.isRestaurantDetailsCompleted;
  }
  goBackToResturant(){
    this.isRestaurantDetailsCompleted = false;
  }
  onContactInformationCompleted() {
    this.isContactInformationCompleted = !this.isContactInformationCompleted;
  }
  goBackTolicenses(){
    this.isContactInformationCompleted = false;
  } 
}
