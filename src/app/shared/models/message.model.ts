import { FileModel } from './file.model';

export class Message {
    constructor(
        public user: string,
        public project: string,
        public text: string,
        public files?: string[] ,
        public date?:string,
        public _id?:string,
        )
        {}    
}

