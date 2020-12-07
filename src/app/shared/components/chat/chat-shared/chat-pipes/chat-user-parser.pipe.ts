import { Pipe, PipeTransform } from '@angular/core';
import { ChatUser } from '../chat-models/chat-user.model';


@Pipe({
  name: 'chatUserParser'
})
export class ChatUserParserPipe implements PipeTransform {
  transform(users:any): ChatUser[] {
    let chatUsers:ChatUser[]= users.map((u)=>{ return {name:u.name,_id:u._id,connected:u.connected,img:u.img? u.img:null}})
    return chatUsers
  }
}
