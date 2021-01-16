import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ChatUserParserPipe } from './chat-shared/chat-pipes/chat-user-parser.pipe';
import { ChatMessagesComponent } from './chat-shared/chat-components/chat-messages/chat-messages.component';
import { ChatUsersComponent } from './chat-shared/chat-components/chat-users/chat-users.component';
import { ChatToolsComponent } from './chat-shared/chat-components/chat-tools/chat-tools.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ChatInputComponent } from './chat-shared/chat-components/chat-input/chat-input.component';
import { ChatFilesDialogComponent } from './chat-shared/chat-components/chat-files-dialog/chat-files-dialog.component';
import { LpFilesUploaderModule } from '../../../../library/components/lp-files-uploader/lp-files-uploader.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ChatComponent, ChatMessagesComponent, ChatUsersComponent, ChatToolsComponent,ChatUserParserPipe, ChatInputComponent, ChatFilesDialogComponent],
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
