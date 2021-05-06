import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../module/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  estudent: Student = new Student(0,"","",0) ;
  constructor(public studentService: StudentService, public route: Router,public ar:ActivatedRoute) { }
  edit() {
    console.log(this.estudent)
    return this.studentService.edit(this.estudent._id, this.estudent).subscribe(
      a => {
        this.route.navigate([
          '/student'
        ])
      }
    )
  }
  ngOnInit(){
    let id = 0;
    let name = '';
    let email = '';
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
        email = a['Email'];
      }
    )
    this.studentService.getStudent(id).subscribe(
      d => this.estudent = d
    )

  }
}