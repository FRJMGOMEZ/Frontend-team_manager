
import { User } from './user.model';
import { PrevState } from './prev-state.model';

export class Project{

    constructor(public name:string,
                public participants?:string[] | User[],
                public administrators?:string[] | User[],
                public messages?:string[],
                public tasks?:string[],
                public status?:boolean,
                public _id?: string,
                public prevStates?: PrevState[],
                
                ){
    }
}

export class ProjectOrder{
    constructor(public project:Project,
                public order:string){
    }
}