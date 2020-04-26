import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list/project-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: ProjectListComponent}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
