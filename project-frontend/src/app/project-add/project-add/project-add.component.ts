import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  @Input() projectData:any = { id:'', name:'', desc: '', plannedStartDate: '', actualStartDate: '',
  plannedEndDate: '', actualEndDate: '', isStarted: '', isComplete:'', incExHandling:'', incLogging:'',
  incAuthAuth:'', stackFront:'',stackBack:'',stackDB:'', extDataSource:'', extDataSourceLink:'', useCase1:'',
  useCase2:'',useCase3:'',useCase4:'',useCase5:'',useCase6:'',useCase7:'',useCase8:'',useCase9:'',useCase10:'',
};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProject() {
    this.rest.addProject(this.projectData).subscribe((result) => {
      this.router.navigate(['/api/projects/']);
        }, (err) => {
      console.log(err);
    });
  }
}
