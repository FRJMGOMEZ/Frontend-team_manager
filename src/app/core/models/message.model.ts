import { FileModel } from './file.model';

export class MessageModel {
    constructor(
        public text: string,
        public files?: FileModel[] | string[] ,
        public date?:number,
        public _id?:string,
        )
        {}    
}

