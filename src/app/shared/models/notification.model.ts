import { User } from './user.model';

export class NotificationModel {

    constructor(

        public type: string,

        public userFrom: string | User,

        public usersTo: string[] | User[],

        public method: string,

        public checked: boolean,

        public date: number,

        public item: any,

        public oldItem?: any,

        public _id?:string

    ) {

    }


}
