import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../module/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  nstudent:Student =new Student(0,"","",0);
  
  constructor(public studentService:StudentService,public router:Router) { }
  save(){
    return this.studentService.add(this.nstudent).subscribe(
      a=>{
        this.router.navigate([
          '/student'
        ])
      }
    )
  }
  ngOnInit(): void {
  }

}
