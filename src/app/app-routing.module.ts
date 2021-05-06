import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  },
  {
    path: 'student',
    component: StudentListComponent
  },
  {
    path: 'student/details/:id',
    component: StudentDetailsComponent
  },
  {
    path: 'student/add',
    component: StudentAddComponent
  },
  {
    path: 'student/edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'department',
    component:DepartmentListComponent
  },
  
  {
    path: 'department/details/:id',
    component: DepartmentDetailsComponent
  },
  {
    path: 'department/add',
    component: DepartmentAddComponent
  },
  {
    path: 'department/edit/:id',
    component: DepartmentEditComponent
  },
  {
    path: 'course',
    component: CourseListComponent
  },
  
  {
    path: 'course/details/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'course/add',
    component: CourseAddComponent
  },
  {
    path: 'course/edit/:id',
    component: CourseEditComponent
  },

  {
    path: '**',
    component: NotfoundComponent
  },
  {
    path: "", redirectTo: "/home", pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
