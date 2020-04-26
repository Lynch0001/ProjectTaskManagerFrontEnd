import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projects = [];
    this.rest.getProjects().subscribe((data: {}) => {
      console.log(data);
      this.projects = data;
    });
  }

  add() {
    this.router.navigate(['/api/project-add']);
  }

  delete(id) {
    this.rest.deleteproject(id).subscribe(res => {
      this.router.navigate(['/api/projects/']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
