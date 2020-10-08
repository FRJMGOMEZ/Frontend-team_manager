import { User } from './user.model';
import { Project } from './project.model';

export class TaskModel {
    constructor(
        public name: string,
        public description: string,
        public user: string | User,
        public participants: string[] | User[],
        public project: string | Project,
        public startDate: number,
        public endDate: number,
        public recursive:boolean,
        public disabled:boolean,
        public allDay:boolean,
        public startTime?: string,
        public endTime?: string,
        public editable?:boolean,
        public _id?: string,
    ) { }
}


