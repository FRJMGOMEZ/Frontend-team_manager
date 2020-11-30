import { Component, Input, OnInit } from '@angular/core';
import { LpChatUser } from './lp-chat-shared/lp-chat-models/lp-chat-user.model';

@Component({
  selector: 'lp-chat',
  templateUrl: './lp-chat.component.html',
  styleUrls: ['./lp-chat.component.scss']
})
export class LpChatComponent implements OnInit {
  @Input() users:LpChatUser[]=[];
  @Input() usersConnected:string[]
  constructor() { }
  ngOnInit(): void {
  }

}
