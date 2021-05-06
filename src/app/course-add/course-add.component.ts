import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../module/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  ncourse: Course = new Course(0,"");
  constructor(public courseService: CourseService, public router: Router) { }
  save() {
    return this.courseService.add(this.ncourse).subscribe(
      a => {
        console.log(this.ncourse)
        this.router.navigate([
          '/course'
        ])
      }
    )
  }
  ngOnInit(): void {
  }

}
