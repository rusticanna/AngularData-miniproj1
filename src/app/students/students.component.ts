import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() studentName: string = "";
  @Input() selectedStudent:Student;

  constructor() { }

  ngOnInit() {
  }

}
