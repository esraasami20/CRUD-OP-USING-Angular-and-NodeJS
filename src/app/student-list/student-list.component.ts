import { Component, OnInit } from '@angular/core';
import { Student } from '../module/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(d=>{
      this.students=d;
    })
  }

}


