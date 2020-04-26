import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail/project-detail.component';
import { ProjectMenuComponent } from './project-menu/project-menu/project-menu.component';
import { ProjectFooterComponent } from './project-footer/project-footer/project-footer.component';
import { ProjectAddComponent } from './project-add/project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit/project-edit.component';
import { ProjectTaskListComponent } from './project-task-list/project-task-list/project-task-list.component';
import { TaskAddComponent } from './task-add/task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit/task-edit.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';



const appRoutes: Routes = [
  {
    path: 'api/projects',
    component: ProjectListComponent,
    data: { title: 'Project List' }
  },
  {
    path: 'api/project-detail/:id',
    component: ProjectDetailComponent,
    data: { title: 'Project Details' }
  },
  {
    path: 'api/project-add',
    component: ProjectAddComponent,
    data: { title: 'Project Add' }
  },
  {
    path: 'api/project-edit/:id',
    component: ProjectEditComponent,
    data: { title: 'Project Edit' }
  },
  {
    path: 'api/project-task-list/:id',
    component: ProjectTaskListComponent,
    data: { title: 'Project Task List' }
  },
  {
    path: 'api/task-edit/:id/:tid',
    component: TaskEditComponent,
    data: { title: 'Task Edit' }
  },
  {
    path: 'api/task-add/:id',
    component: TaskAddComponent,
    data: { title: 'Task Add' }
  },
  { path: '',
    redirectTo: 'api/projects',
    pathMatch: 'full'
  },
  {
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectMenuComponent,
    ProjectFooterComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectTaskListComponent,
    TaskAddComponent,
    TaskEditComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
