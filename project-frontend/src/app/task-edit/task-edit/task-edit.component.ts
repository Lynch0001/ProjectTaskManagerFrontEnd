import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() task: any = { tid: '', taskName: '', tDueDate: '', tIsStarted: '', tIsComplete: ''};

  project: any;
  displayTasks: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const urltid: string = this.route.snapshot.params.tid;

    this.rest.getTasksByProject(this.route.snapshot.params['id']).subscribe((tdata: {}) => {
      console.log(tdata);
      this.displayTasks = tdata;
    });

    this.rest.getProject(this.route.snapshot.params['id']).subscribe((pdata: {}) => {
      console.log(pdata);
      this.project = pdata;
    });

    this.rest.getTask(this.route.snapshot.params['id'], parseInt(urltid)).subscribe((tdata: {}) => {
      console.log(tdata);
      this.task = tdata;
    });
  }

  updateTask(id: number) {
    this.rest.updateTask(this.route.snapshot.params['id'], this.task).subscribe((result) => {
      this.router.navigate(['/api/project-task-list/' + id]);
        }, (err) => {
      console.log(err);
    });
  }

}
