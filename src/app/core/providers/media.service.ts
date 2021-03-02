import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService implements OnDestroy {
 desktop:boolean;
 mediaSubscription:Subscription;
 media$: Observable<MediaChange[]>;
 private mqAlias:string;
 constructor(private media: MediaObserver) {
   this.media$ = this.media.asObservable();
   this.mediaSubscription = this.getCurrentMedia().subscribe()}
 getCurrentMedia(){
   return this.media$.pipe(map((res) => { return res[0].mqAlias }), tap((media: string) => {
     this.mqAlias && this.mqAlias != media ? window.location.reload() : null;
     this.mqAlias = media;
     switch (media) {
       case 'xl': this.desktop = true;
         break;
       case 'lg': this.desktop = true;
         break;
       case 'sm': this.desktop = false;
         break;
       case 'md': this.desktop = false;
         break;
       case 'xs': this.desktop = false;
         break;
     }
   }))
 }
 ngOnDestroy(){
    this.mediaSubscription.unsubscribe();
 }

}
