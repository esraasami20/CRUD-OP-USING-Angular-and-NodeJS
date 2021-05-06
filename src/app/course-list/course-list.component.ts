import { Component, OnInit } from '@angular/core';
import { Course } from '../module/course';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(
      a => {
        this.courses = a;
      }
    )
  }

}
