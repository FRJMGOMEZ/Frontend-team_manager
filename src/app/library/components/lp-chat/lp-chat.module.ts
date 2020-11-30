import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpChatComponent } from './lp-chat.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LpChatMessagesComponent } from './lp-chat-shared/lp-chat-components/lp-chat-messages/lp-chat-messages.component';
import { LpChatUsersComponent } from './lp-chat-shared/lp-chat-components/lp-chat-users/lp-chat-users.component';
import { LpChatToolsComponent } from './lp-chat-shared/lp-chat-components/lp-chat-tools/lp-chat-tools.component';
import { LpChatUserParserPipe } from './lp-chat-shared/lp-chat-pipes/lp-chat-user-parser.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LpChatComponent, LpChatMessagesComponent, LpChatUsersComponent, LpChatToolsComponent,LpChatUserParserPipe, LpChatUserParserPipe],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[LpChatComponent, LpChatUserParserPipe]
})
export class LpChatModule { }
