

export class ActionRequired { 

    constructor(
        public usersTo: { name: string, _id: string }[],
        public userFrom: { name: string, _id: string },
        public property: string,
        public options: any[],
        public currentValue: string,
        public item: { name: string, type: string, _id: string }   
    ){

    }
     }