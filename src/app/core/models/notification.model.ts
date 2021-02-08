import { User } from './user.model';
import { Project } from './project.model';

export class NotificationModel {

    constructor(
        public project: string | Project,

        public task:string,

        public type: string,

        public modelName:string,

        public userFrom: string | User,

        public usersTo: string[] | {checked:boolean,user:string}[],

        public method: string,

        public date: number,

        public item: any,

        public oldItem?: any,

        public _id?:string

    ) {

    }


}
