import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  
  displayAbout = '';
  displayPort = '';
  displayGit = '';
  displayContact = '';
  config: { footer: string; date: Date; };



  showAbout() {
   this.displayAbout = 'Trochę o mnie';
   
  }
  
  showPort() {
    this.displayPort = 'Moje portfolio';
  }
  showGit() {
    this.displayGit ='Mój git';
  }
  showContact() {
    this.displayContact ='Mój contact';
  }
  isShown = false;
  toggle() {
    this.isShown = !this.isShown;
  }
 
 
  constructor() {
    this.config = {
      footer: '© Moja Strona',
      date: new Date(),
      
    }
  }

   

}




