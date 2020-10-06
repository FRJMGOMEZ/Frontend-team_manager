
import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user.model';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServices } from '../../providers/user.service';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../providers/project.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { OOService } from '../../../library/providers/objects-operations.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';

@Component({
    selector: 'app-project-dialog-smart',
    template: `
       <app-project-dialog [participantsOptions]="participantsOptions" [userOnline]="userOnline" [project]="project" (hide)="hideModal()" (postProject)="postProject($event)" (putProject)="putProject($event)" > </app-project-dialog>
    `,

})
export class ProjectDialogSmartComponent implements OnInit {
    participantsOptions: User[] = [];
    userOnline: User = this.authService.userOnline;
    project:Project
    constructor(private userService: UserServices,
                  private projectService: ProjectService,
                  private authService: AuthService,
                  private localStorageService:LocalStorageService,
                  private dialogRef: MatDialogRef<ProjectDialogSmartComponent>,
                  @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit() {
        if(this.data?.project){
             this.project = OOService.copyObject(this.data.project)
             this.localStorageService.set('state-data',this.project._id,'project-on-screen')
        }
        this.userService.getUsers(0,999999).subscribe((users: User[]) => {
            this.participantsOptions = users;
        })
    }
    postProject(project:Project) {
            this.projectService.postProject(project).subscribe()
    }

    putProject(project:Project){
           this.projectService.putProject(project).subscribe(()=>{
               this.hideModal();
           })
    }

    hideModal(dataBack?:any) {
        this.dialogRef.close(dataBack)
    }

}
