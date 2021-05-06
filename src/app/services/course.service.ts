import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../module/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getAll(){
    return this.http.get<Course[]>("http://localhost:8080/course/list")
  }

  getCourse(id:number){
   return this.http.get<Course>("http://localhost:8080/course/details/"+id)
  }

  add(crs: Course) {
    return this.http.post<Course[]>("http://localhost:8080/course/add/", crs);
  }

  edit(id: number, crs: Course) {
    return this.http.post<Course[]>("http://localhost:8080/course/edit/" + id, crs);
  }

  deleteCourse(id: number) {
    return this.http.get("http://localhost:8080/course/delete/" + id)
  }
  constructor(public http:HttpClient) { }
}
