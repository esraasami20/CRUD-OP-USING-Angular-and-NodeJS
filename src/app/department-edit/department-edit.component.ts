import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../module/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  edept: Department;
  constructor(public departmentService: DepartmentService, public arr: ActivatedRoute, public rout: Router) { }
  edit() {
    console.log(this.edept)
    return this.departmentService.edit(this.edept._id, this.edept).subscribe(
      a => {
        this.rout.navigate([
          '/department'
        ])
      }
    )
  }
  ngOnInit() {
    let name = "";
    let id = 0;

    this.arr.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
      }
    )
    this.departmentService.getDept(id).subscribe(
      d => this.edept = d
    )

  }

}
