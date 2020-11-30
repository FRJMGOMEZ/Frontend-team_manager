import { Component, OnInit, Input } from '@angular/core';
import { LpChatUser } from '../../lp-chat-models/lp-chat-user.model';

@Component({
  selector: 'lp-chat-users',
  templateUrl: './lp-chat-users.component.html',
  styleUrls: ['./lp-chat-users.component.scss']
})
export class LpChatUsersComponent implements OnInit {
  @Input() users:LpChatUser[]=[]
  @Input() usersConnected:string[]=[]
  constructor() { }
  ngOnInit(): void {
  }

}
