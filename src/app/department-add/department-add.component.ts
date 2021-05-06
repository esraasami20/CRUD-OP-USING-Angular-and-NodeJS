import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service'
import { Router } from '@angular/router';
import { Department } from '../module/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  ndept:Department=new Department(0,"");
  constructor(public departmentServices:DepartmentService,public rout:Router) { }
  save(){
    return this.departmentServices.add(this.ndept).subscribe(
      a=>{
        this.rout.navigate([
          '/department'
        ])
      }
    )
  }
  ngOnInit() {
  }

}
