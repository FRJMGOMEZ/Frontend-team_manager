import { User } from './user.model';
import { Project } from './project.model';

export class TaskModel {
    constructor(
        public name: string,
        public description: string,
        public user: string | User,
        public participants: string[] | User[],
        public project: string | Project,
        public priority:number,
        public status:string,
        public startDate: number,
        public endDate: number,
        public disabled:boolean,
        public editable?:boolean,
        public prevStates?: { [key: string]: any }[],
        public _id?: string,
        public deliverDate?: number,
        public validationDate?: number,
        public extraTime?: number,
    ) { }
}


