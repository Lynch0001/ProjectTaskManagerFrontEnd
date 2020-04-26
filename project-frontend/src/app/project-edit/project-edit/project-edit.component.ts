import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  
  // TODO: Test and Update with full set of input fields
  @Input() projectData:any = { id:'', name:'', desc: '', plannedStartDate: '', actualStartDate: '',
  plannedEndDate: '', actualEndDate: '', isStarted: '', isComplete:'', incExHandling:'', incLogging:'',
  incAuthAuth:'', stackFront:'',stackBack:'',stackDB:'', extDataSource:'', extDataSourceLink:'', useCase1:'',
  useCase2:'',useCase3:'',useCase4:'',useCase5:'',useCase6:'',useCase7:'',useCase8:'',useCase9:'',useCase10:''
};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.projectData = data;
    });
  }

  updateProject() {
    this.rest.updateProject(this.route.snapshot.params['id'], this.projectData).subscribe((result) => {
      this.router.navigate(['/api/projects/']); // ['/project-detail/' + result.id]
        }, (err) => {
      console.log(err);
    });
  }
}
