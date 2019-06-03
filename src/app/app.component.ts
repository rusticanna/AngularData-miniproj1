import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  name = 'Colin Knill';
  currentStudent:Student;
  students:Student[] = [
    {name: "John Wick", gpa: 2.8, section: "Computer Science"},
    {name: "Peter Pan", gpa: 3.8, section: "Bilogical Science"},
    {name: "Jose Ada", gpa: 2.8, section: "Chemistry"},
    {name: "Ben Rice", gpa: 3.3, section: "Economics"},
    {name: "Rose Ken", gpa: 1.0, section: "Social Science"}
  ];

  // function for interpolation
  printName():string {
    return 'this is text app component';
  }
  
  // function to print to console.log
  printText() {
    console.log('Hey there');
  }

  //checking for an empty name and return true if name is blank
  isEmpty():boolean {
    return name === "";
  }

  setCurrentStudent(student:Student) {
    this.currentStudent = student;
  }
}
