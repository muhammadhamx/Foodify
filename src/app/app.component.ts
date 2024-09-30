import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TimelineComponent } from "./timeline/timeline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponent, RouterLink, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'RPos-FE';
  currentUrl: string = ''
  event$ 

  
  constructor(private router : Router) {
    this.event$ =this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
              console.log(event.url);
              this.currentUrl = event.url
            }
          });
  }


  cons(){
    console.log('lklkl')
  }

  }

