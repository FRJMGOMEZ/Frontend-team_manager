import { EventModel } from './event.model';



export class Hour{
    date:number
    constructor(date:Date){
         this.date = date.getTime();
    }

}