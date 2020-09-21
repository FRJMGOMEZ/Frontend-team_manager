
export class FileModel{
    constructor(public name:string,
                public title:string,
                public download:boolean,
                public format:string,
                public _id?:string){
    }
}

export interface IFile extends Document {
    name: string,
    title: string,
    download: boolean,
    format: string
}

export class FileOrder{
    constructor(public file:FileModel,
                public order: string){}
}