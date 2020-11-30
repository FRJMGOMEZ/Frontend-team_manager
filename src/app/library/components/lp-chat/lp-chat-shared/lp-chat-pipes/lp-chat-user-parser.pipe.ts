import { Pipe, PipeTransform } from '@angular/core';
import { LpChatUser } from '../lp-chat-models/lp-chat-user.model';

@Pipe({
  name: 'lpChatUserParser'
})
export class LpChatUserParserPipe implements PipeTransform {
  transform(users:any, ...args: unknown[]): LpChatUser[] {
    let chatUsers:LpChatUser[]= users.map((u)=>{ return {name:u.name,_id:u._id,connected:false,img:u.img? u.img:null}})
    return chatUsers
  }
}
