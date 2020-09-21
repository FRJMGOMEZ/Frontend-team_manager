import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../providers/project.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { DialogsService } from '../../providers/dialogs.service';

@Component({
    selector: 'app-projects-smart',
    template:`
       <app-projects  [projects]="projects" (projectSelectedOut)="selectProject($event)" [projectSelectedIn]="projectSelected" (deleteProject)="deleteProject($event)" (putProject)="putProject($event)" (postProject)="postProject()" ></app-projects>
    `,
})
export class ProjectsSmartComponent implements OnInit {

    projects: Project[] = [];
    projectSubs: Subscription
    projectSelected:string;
    constructor( private projectService: ProjectService, private localStorageService: LocalStorageService, private dialogsService: DialogsService) { }
    ngOnInit() {
        this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
            this.projectSelected= this.localStorageService.get('state-data', 'project') ;
        })
        this.projectSubs = this.projectService.project$.subscribe((data: { project: Project | string, order: string }) => {
            switch (data.order) {
                case 'put': this.projects = this.projects.map((project: Project) => { return (data.project as Project)._id === project._id ? data.project as Project : project })
                    break;
                case 'post': this.projects = [...this.projects, data.project as Project];
                    break;
                case 'delete':
                    this.projects = this.projects.filter((project: Project) => { return project._id != data.project as string })
                    break;
            }
        })
    }
    selectProject(projectId?: string) {
         console.log('all')
        this.projectService.selectProject(projectId ? projectId : '')
    }
    putProject(project: Project) {
        this.dialogsService.openEditProjectDialog(project._id);
    }

    postProject() {
        this.dialogsService.openPostProjectDialog()
    }

    deleteProject(projectId: string) {
        this.projectService.deleteProject(projectId).subscribe();
    }
    ngOnDestroy() {
        this.projectSubs.unsubscribe()
    }
}
