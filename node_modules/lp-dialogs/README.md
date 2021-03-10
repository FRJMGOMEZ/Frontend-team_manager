# LpDialogs

LpDialogs shows an ANGULAR MATERIAL confirm and info dialogs. 

### Tech
* [Angular 11] 
* [Angular Material] 
### Peer Dependencies
```
"@angular/common": "^10.0.4",
"@angular/core": "^10.0.4",
"@angular/material": "^10.0.2",
"@angular/cdk": "^10.0.2"
```
### Installation
```
$ npm install lp-dialog
```
### Use
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private lpDialogsService:LpDialogsService ){
    
  }
  showDialogConfirm(){
       this.lpDialogsService.openConfirmDialog(title: string = 'CONFIRM DELETION', message: string = 'Are you sure?').subscribe((response:boolean)=>{
        
       })
  }
  
  showInfoDialog(){
      this.lpDialogsService.openInfoDialog(message: string, title: string, item?: string).subscribe(()=>{
         
      })
  }
  title = 'cargomusicapp-front';
}
```
















