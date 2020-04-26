import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  taskCompletion: number;
  tasksTotal: number;
  tasksComplete: number;
  project: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    console.log('Initializing project-detail')
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log('Receiving project data--Starting')
      this.project = data;
      console.log(data);
      console.log('Receiving project data--Complete')

    });
    /* For STATIC Testing Progress Bar */
    this.tasksTotal = 100;
    this.tasksComplete = 60;
    this.taskCompletion = (this.tasksComplete / this.tasksTotal) * 100;

   }
}
