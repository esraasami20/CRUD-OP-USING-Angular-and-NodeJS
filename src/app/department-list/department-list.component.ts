import { Component, OnInit } from '@angular/core';
import { Department } from '../module/department';
import { DepartmentService } from '../services/department.service'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[];
  constructor(public departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(
      a=>{
        this.departments=a;
      }
    )
  }

}
