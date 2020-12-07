import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { LpFilesUploaderModule } from '../../../library/components/lp-files-uploader/lp-files-uploader.module';
import { ChatUserParserPipe } from './chat-shared/chat-pipes/chat-user-parser.pipe';
import { ChatMessagesComponent } from './chat-shared/chat-components/chat-messages/chat-messages.component';
import { ChatUsersComponent } from './chat-shared/chat-components/chat-users/chat-users.component';
import { ChatToolsComponent } from './chat-shared/chat-components/chat-tools/chat-tools.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [ChatComponent, ChatMessagesComponent, ChatUsersComponent, ChatToolsComponent,ChatUserParserPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    LpFilesUploaderModule,
    MaterialModule,
    PipesModule
  ],
  exports: [ChatComponent, ChatUserParserPipe]
})
export class ChatModule { }
