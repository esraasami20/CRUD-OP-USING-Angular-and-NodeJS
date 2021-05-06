import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../module/department'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getAll(){
    return this.http.get<Department[]>("http://localhost:8080/departments/list")
  }

  getDept(id:number){
   return this.http.get<Department>("http://localhost:8080/departments/details/"+id)
  }

  add(dept: Department) {
    return this.http.post<Department[]>("http://localhost:8080/departments/add/", dept);
  }

  edit(id: number, dept: Department) {
    return this.http.post<Department[]>("http://localhost:8080/departments/edit/" + id, dept);
  }

  deleteDept(id: number) {
    return this.http.get("http://localhost:8080/departments/delete/" + id)
  }
  constructor(public http:HttpClient) { }
}
