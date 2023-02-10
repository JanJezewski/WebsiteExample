import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayAbout = '';
  displayPort = '';
  displayGit = '';
  displayContact = '';


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
}




