import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  tasks: any = [];
  project: any;
  tasksTotal: number;
  tasksComplete: number = 0;
  taskCompletion: number;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
    console.log('Constuctor executing');

    console.log('Receiving TASK data');
    this.rest.getTasksByProject(this.route.snapshot.params['id']).subscribe((tdata: {}) => {
      console.log(tdata);
      this.tasks = tdata;
      this.tasksTotal = this.getTasksTotal();
      let i: number;
      for (i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].tIsComplete) { this.tasksComplete += 1; }
      }
      this.taskCompletion = (this.tasksComplete / this.tasksTotal) * 100;
    });

  }

  ngOnInit() {

    console.log('Initializing project-detail');
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log('Receiving PROJECT data');
      this.project = data;
      console.log(data);
    });


  }

getTasksTotal() {
  console.log('Retreiving tasks total');
  const tlen = this.tasks.length;
  console.log('tlen ' + tlen);
  return tlen;
  }


}

