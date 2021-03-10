
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../core/models/user.model';
import { UserServices } from '../../../core/providers/user.service';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/providers/project.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LpObject } from 'lp-operations';
import { LpLocalStorage } from 'lp-operations';

@Component({
    selector: 'app-project-edition-and-creation-smart',
    template: `
       <app-project-edition-and-creation [participantsOptions]="participantsOptions" [userOnline]="userOnline" [project]="project" (hide)="hideModal()" (postProject)="postProject($event)" (putProject)="putProject($event)" > </app-project-edition-and-creation>
    `,
    styleUrls:['./project-edition-and-creation.component.css']

})
export class ProjectEditionAndCreationSmartComponent implements OnInit {
    participantsOptions: User[] = [];
    userOnline: User = this.authService.userOnline;
    project:Project
    constructor(private userService: UserServices,
                  private projectService: ProjectService,
                  private authService: AuthService,
                  private dialogRef: MatDialogRef<ProjectEditionAndCreationSmartComponent>,
                  @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit() {
        if(this.data?.project){
             this.project = LpObject.copyObject(this.data.project);
            LpLocalStorage.set('state-data',this.project._id,'project-on-screen');
        }
        this.userService.getUsers(0,999999).subscribe((users: User[]) => {
            this.participantsOptions = users;
        })
    }
    postProject(project:Project) {
            this.projectService.postProject(project).subscribe(()=>{
                this.hideModal();
            })
    }

    putProject(changes:{[key:string]:any}){
     this.projectService.putProject(changes,this.project._id).subscribe(()=>{
               this.hideModal();
        })
    }

    hideModal(dataBack?:any) {
        this.dialogRef.close(dataBack)
    }

}
