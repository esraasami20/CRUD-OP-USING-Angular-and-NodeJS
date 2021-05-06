import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMaxListeners } from 'process';
import { Student } from '../module/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student = new Student(0, "", "", 0);
  constructor(public studentService: StudentService, public ar: ActivatedRoute, public routes: Router) { }

  dstudent: Student = new Student(0, "", "", 0);
  deletee() {
    this.studentService.deleteStudent(this.student._id).subscribe(
      a => this.routes.navigateByUrl('/student')
    )
  }
  ngOnInit() {
    let id = 0;
    this.ar.params.subscribe(
      a => (
        id = a['id']
      )
    )
    return this.studentService.getStudent(id).subscribe(
      d => this.student = d
    )
  }

}
