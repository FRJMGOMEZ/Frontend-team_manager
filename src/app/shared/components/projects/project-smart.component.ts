import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../providers/project.service';
import { DialogsService } from '../../providers/dialogs.service';
import { ArrayOperationsService } from '../../../library/providers/array-operations.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';

@Component({
    selector: 'app-projects-smart',
    template: `
       <app-projects  

       [projects]="projects"
       (projectSelectedOut)="selectProject($event)"
       [projectSelectedIn]="projectSelected"
       (deleteProject)="deleteProject($event)"
       (putProject)="putProject($event)"
       (postProject)="postProject()" >
       
       </app-projects>
    `,
})
export class ProjectsSmartComponent implements OnInit {

    @Input()projects: Project[] = []
    projectSubs: Subscription
    projectSelected: string;

    constructor(private projectService: ProjectService,
                private dialogsService: DialogsService,
                private localStorageService:LocalStorageService) { }
    ngOnInit() {
        /// subscription to the changes in the projects ///
        this.projectSubs = this.projectService.project$.subscribe((data: { project: Project, action: string }) => {

            //// updating the projects ///
            this.projects = ArrayOperationsService.update(this.projects, data.project, data.action)
            this.projectService.projects = this.projects;

            /// if the deleted project is the project selected, spread the change ////
            if(data.action === 'DELETE' && this.projectSelected === data.project._id){
                this.projectSelected = '';
                this.projectService.selectProject('') 
            }
            if(data.action === 'POST' && !this.projectSelected){
                this.projectSelected = data.project._id;
                this.projectService.selectProject(data.project._id)
            }
        })
    }

    ngOnChanges(changes:SimpleChanges){
        if(changes.projects && this.projects){
            //// check if there are project in localSorage //
            this.projectSelected = this.localStorageService.get('state-data', 'project');
            /// If there are no project in local storage we set the last item of teh array of project ///
            if (!this.projectSelected && this.projects.length > 0) {
                this.projectSelected = this.projects[this.projects.length - 1]._id;
            }
            this.projectService.selectProject(this.projectSelected)
        }
    }
    selectProject(projectId?: string) {
        this.projectService.selectProject(projectId)
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
        this.projectSubs.unsubscribe()
    }
}
