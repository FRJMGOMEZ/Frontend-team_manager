import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../providers/project.service';
import { DialogsService } from '../../providers/dialogs.service';
import { Project } from '../../models/project.model';
import { LpArray } from 'lp-operations';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { LpLocalStorage } from '../../../../../projects/lp-operations/src/lp-local-storage';


@Component({
    selector: 'app-projects-smart',
    templateUrl: './projects-smart.component.html',
    styleUrls:['./projects-smart.component.scss']
})
export class ProjectsSmartComponent implements OnInit {

    @ViewChild(MatExpansionPanelHeader) expHeader: MatExpansionPanelHeader;
    projects: Project[] = []
    projectSubs: Subscription;
    projectSelected: string;

    get projectName(){
   return this.projects.find((p)=>{ return p._id === this.projectSelected}).name;
    }
    constructor(private projectService: ProjectService,
                private dialogsService: DialogsService) { }
    ngOnInit() {

        this.projectSelected = this.projectService.selectedProject ? this.projectService.selectedProject._id  : undefined;

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
            const projectId = LpLocalStorage.get('state-data','project') ;
            const project = projectId ? this.projects.find((p)=>{ return p._id === projectId}) : undefined;
            project ? this.projectService.selectProject(project) : null;
        })
    }
    selectProject(project: Project) {
        this.projectService.selectProject(project);
        this.expHeader ? this.expHeader._toggle() : null;
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

    openProjectList(){
        this.dialogsService.openProjectList(this.projects).subscribe((res:any)=>{
            switch(res.order){
                case 'put': this.putProject(res.project);
                break;
                case 'delete':this.deleteProject(res.project);
                break;
                case 'select':this.selectProject(res.project);
                break;
        }
        })
    }
    ngOnDestroy() {
        this.projectSubs.unsubscribe();
    }
}
