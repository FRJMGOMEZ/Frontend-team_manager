
export class Message {
    constructor(
        public text: string,
        public files?: File[] | string[] ,
        public date?:number,
        public _id?:string,
        )
        {}    
}

