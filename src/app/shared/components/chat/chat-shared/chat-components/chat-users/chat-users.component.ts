import { Component, OnInit, Input } from '@angular/core';
import { ChatUser } from '../../chat-models/chat-user.model';

@Component({
  selector: 'chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.scss']
})
export class ChatUsersComponent implements OnInit {
  @Input() users:ChatUser[]=[]
  constructor() { }
  ngOnInit(): void {
  }

}
