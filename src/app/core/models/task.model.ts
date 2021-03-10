import { User } from './user.model';
import { Project } from './project.model';
import { PrevState } from './prev-state.model';

export class Task {
    constructor(
        public name: string,
        public description: string,
        public createdBy: string | User,
        public participants: string[] | User[],
        public reviewers:string[] | User[],
        public project: string | Project,
        public priority:number,
        public status:string,
        public startDate: number,
        public endDate: number,
        public prevStates?: PrevState[],
        public deliverDate?: number,
        public validationTime?: number,
        public extraTime?: number,
        public actionsRequired?:{[key:string]:any}[],
        public _id?: string,

    ) { }
}



