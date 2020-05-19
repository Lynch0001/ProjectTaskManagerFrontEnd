import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-task-list',
  templateUrl: './project-task-list.component.html',
  styleUrls: ['./project-task-list.component.css']
})
export class ProjectTaskListComponent implements OnInit {

  project: any;
  tasks: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	this.rest.getTasksByProject(this.route.snapshot.params['id']).subscribe((tdata: {}) => {
<<<<<<< Upstream, based on branch 'master' of https://github.com/Lynch0001/ProjectTaskManagerFrontEnd.git
      console.log("tdata: " + tdata);
=======
      console.log('tdata: ' + tdata);
>>>>>>> 836af45 Fixed bugs: Delete task page reload/Edit task affecting task list
      this.tasks = tdata;
    });
<<<<<<< Upstream, based on branch 'master' of https://github.com/Lynch0001/ProjectTaskManagerFrontEnd.git
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((pdata: {}) => {
      console.log("Project Data: " + pdata);
      this.project = pdata;
=======
 this.rest.getProject(this.route.snapshot.params['id']).subscribe((pdata: {}) => {
    console.log('Project Data: ' + pdata);
    this.project = pdata;
>>>>>>> 836af45 Fixed bugs: Delete task page reload/Edit task affecting task list
    });
  }

  add(id) {
    this.router.navigate(['/api/projects/' + id + '/tasks']);
  }

  delete(id, tid) {
    this.rest.deletetask(id, tid).subscribe((result) => {
      this.router.navigate(['/api/project-task-list/' + id + '/reload']);
        }, (err) => {
          console.log(err);
        });
  }

}
