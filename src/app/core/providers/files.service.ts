import { Injectable } from '@angular/core';
import { empty } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { LpDialogsService } from 'lp-dialogs';
import { API_URL } from '../../config/api-url';
import { FileModel } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  textFormats: string[] = ['pdf'];


  constructor(private http:HttpClient,
              private lpDialogsService:LpDialogsService) {}
  getDbFile(fileName:string){
    let url = `${API_URL}file/${fileName}`;
    return this.http.get(url, { responseType: 'blob' })
  }

  deleteFile(file:FileModel){
    let url = `${API_URL}delete-file/${file._id}`;
    const request = this.http.delete(url).pipe(map((res:any)=>{
      return res.file
    }))
    return this.lpDialogsService.openConfirmDialog('FILE DELETION', `The file ${file.title} will be deleted`).pipe(switchMap((res:boolean)=>{ return res?request: empty()}))
  }

  getFileById(id:string){
    let url = `${API_URL}searchById/file/${id}`
    return this.http.get(url).pipe(map((res:any)=>{
      return res.file
    }))
  }
  downloadFile(href:string,name:string){
    const a = document.createElement("a");
    a.href = href;
    a.download = name;
    document.body.appendChild(a);
    a.click();   
  }
}
