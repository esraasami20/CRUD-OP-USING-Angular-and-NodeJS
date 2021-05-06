import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../module/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  ecourse: Course;
  constructor(public courseService: CourseService, public ar: ActivatedRoute, public routes: Router) { }
  edit() {
    console.log(this.ecourse)
    return this.courseService.edit(this.ecourse._id, this.ecourse).subscribe(
      a => {
        this.routes.navigate([
          '/course'
        ])
      }
    )
  }
  ngOnInit(){
    let name = "";
    let id = 0;

    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
      }
    )
    this.courseService.getCourse(id).subscribe(
      d => this.ecourse = d
    )

  }

}
