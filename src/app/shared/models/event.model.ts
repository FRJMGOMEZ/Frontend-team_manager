import { User } from './user.model';
import { Project } from './project.model';

export class EventModel {
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
        public startTime?: string,
        public endTime?: string,
        public taskEvent?:boolean,
        public editable?:boolean,
        public _id?: string,
    ) { }
}

export class EventOrder {
    constructor(public event: EventModel,
        public order: string) { }
}

