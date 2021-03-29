import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProjectService } from '../../core/providers/project.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { RoutesService } from '../../core/providers/routes.service';

@Component({
  selector: 'app-project-pages',
  templateUrl: './project-pages.component.html',
  styleUrls: ['./project-pages.component.scss']
})
export class ProjectPagesComponent implements OnInit , OnDestroy {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  selectedProject:string;

  selectedProjectSubs: Subscription;

  display:boolean = true;

  page:string;
  currentPageSubs: Subscription;

  constructor(private projectService: ProjectService, private ar:ActivatedRoute,private router:Router, private routesService:RoutesService) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((params)=>{
     this.selectedProject = params.get('id');
    });
    this.listenProjectChanges();
    this.currentPageSubs = this.routesService.currentPage$.subscribe((currentPage)=>{
      this.page = currentPage;
    });
  }
  listenProjectChanges() {
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: Project) => {
      if (this.selectedProject != project._id) {
          this.selectedProject = project._id;
          this.router.navigate([this.selectedProject, this.page], { relativeTo: this.ar.parent.parent });
        }
    });
  }

  ngOnDestroy() {
    this.selectedProjectSubs ? this.selectedProjectSubs.unsubscribe() : null;
    this.currentPageSubs.unsubscribe();
  }

}
