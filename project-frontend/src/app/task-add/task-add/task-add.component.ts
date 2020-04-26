import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  /*
  @Input() projectData:any = { id:'', name:'', desc: '', plannedStartDate: '', actualStartDate: '',
  plannedEndDate: '', actualEndDate: '', isStarted: '', isComplete:'', incExHandling:'', incLogging:'',
  incAuthAuth:'', stackFront:'',stackBack:'',stackDB:'', extDataSource:'', extDataSourceLink:'', useCase1:'',
  useCase2:'',useCase3:'',useCase4:'',useCase5:'',useCase6:'',useCase7:'',useCase8:'',useCase9:'',useCase10:'',
};

*/
  @Input() taskData = { tid:'', taskName:'', tDueDate: '', tIsStarted: '', tIsComplete: ''};

  project: any;
  tasks: any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getTasksByProject(this.route.snapshot.params['id']).subscribe((tdata: {}) => {
      console.log(tdata);
      this.tasks = tdata;
    });
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((pdata: {}) => {
      console.log(pdata);
      this.project = pdata;
    });
  }



  addTask(id:number) {
    this.rest.addTask(this.route.snapshot.params['id'], this.taskData).subscribe((result) => {
      this.router.navigate(['/api/project-task-list/' + id]);
        }, (err) => {
      console.log(err);
    });
  }

}
