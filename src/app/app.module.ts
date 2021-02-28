import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { LpDialogsModule } from 'lp-dialogs';
import { MaterialModule } from './shared/material/material.module';
import { TokenInterceptor } from './auth/shared/interceptors/token.interceptor';
import { MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SocketIoModule.forRoot(environment.socketConfig),
    LpDialogsModule,
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
