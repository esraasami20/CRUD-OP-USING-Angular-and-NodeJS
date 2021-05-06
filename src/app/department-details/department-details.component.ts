import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../module/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  dept: Department ;
  constructor(public departmentservices: DepartmentService, public ar: ActivatedRoute, public routes: Router) { }
  deletee() {
    this.departmentservices.deleteDept(this.dept._id).subscribe(
      a => this.routes.navigateByUrl('/department')
    )
  }
  ngOnInit() {
    let id = 0;
    this.ar.params.subscribe(
      b => (
        id = b['id']
      )
    )
    return this.departmentservices.getDept(id).subscribe(
      c => this.dept = c
    )
  }

}
