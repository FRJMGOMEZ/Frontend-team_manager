import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../providers/project.service';
import { DialogsService } from '../../providers/dialogs.service';
import { Project } from '../../models/project.model';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { LpArray } from 'lp-operations';


@Component({
    selector: 'app-projects-smart',
    template: `
       <app-projects  
       [projects]="projects"
       (projectSelectedOut)="selectProject($event)"
       [projectSelectedIn]="projectSelected"
       (deleteProject)="deleteProject($event)"
       (putProject)="putProject($event)"
       (postProject)="postProject()">
       </app-projects>
    `,
})
export class ProjectsSmartComponent implements OnInit {

    projects: Project[] = []
    projectSubs: Subscription;
    projectSelected: string;
    constructor(private projectService: ProjectService,
                private dialogsService: DialogsService,
                private localStorageService:LocalStorageService) { }
    ngOnInit() {

        this.projectService.selectedProject$.subscribe((selectedProject: Project) => {
            this.projectSelected = selectedProject._id;
        })

        /// subscription to the changes in the projects ///
        this.projectSubs = this.projectService.project$.subscribe((data: { project: Project, action: string }) => {
   
            //// updating the projects ///
            this.projects = LpArray.update(this.projects, data.project, data.action)

            /// if the deleted project is the project selected, spread the change ////
            if(data.action === 'DELETE' && this.projectSelected === data.project._id){
                this.projectService.selectProject(null) 
            }
        })

        this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
            const projectSId = this.localStorageService.get('state-data', 'project');
            const projectSelected = projectSId ? this.projects.find((p)=>{ return p._id === projectSId}) : undefined;
            if (projectSelected) {
                this.projectService.selectProject(projectSelected)
            } else if (this.projects.length > 0) {
                this.projectService.selectProject(this.projects[0])
            }
        })
    }
    selectProject(project: Project) {
        this.projectService.selectProject(project)
    }
    putProject(project: Project) {
        this.dialogsService.openEditProjectDialog(project);
    }

    postProject() {
        this.dialogsService.openPostProjectDialog()
    }

    deleteProject(projectId: string) {
        this.projectService.deleteProject(projectId).subscribe();
    }
    ngOnDestroy() {
        this.projectSubs.unsubscribe();
    }
}
