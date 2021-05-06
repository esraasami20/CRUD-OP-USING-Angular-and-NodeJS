import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../module/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(public courseService: CourseService, public arr: ActivatedRoute, public rout: Router) { }
  deletee() {
    this.courseService.deleteCourse(this.course._id).subscribe(
      a => this.rout.navigateByUrl('/course')
    )
  }
  ngOnInit() {
    let id = 0;
    this.arr.params.subscribe(
      b => (
        id = b['id']
      )
    )
    return this.courseService.getCourse(id).subscribe(
      a=>this.course=a
    )
  }
}
