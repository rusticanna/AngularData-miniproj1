import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Colin Knill';
  
  isEmpty():boolean {
    return name === "";
  }
  // function to print to console.log
  printText() {
    console.log('Hey there');
  }
}
