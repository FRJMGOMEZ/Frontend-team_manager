import { Injectable } from '@angular/core';
import { empty, Subject, of, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { LpDialogsService } from 'lp-dialogs';
import { API_URL } from '../../config/api-url';
import { FileModel } from '../models/file.model';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  textFormats: string[] = ['pdf'];
  private fileSrc = new Subject<{order:string,file:FileModel}>();
  file$ = this.fileSrc.asObservable();
  constructor(private http:HttpClient,
              private lpDialogsService:LpDialogsService,
              
              private errorHandlerService:ErrorHandlerService) {}
  getDbFile(fileName:string){
    let url = `${API_URL}file/${fileName}`;
    return this.http.get(url, { responseType: 'blob' })
  }

  spreadFile(file:FileModel,order:string){
    this.fileSrc.next({order,file})
  }

  deleteFile(file:FileModel){
    let url = `${API_URL}delete-file/${file._id}`;
    const request = this.http.delete(url).pipe(
      map((res:any)=>{
      return res.file
    }),
    tap((file:FileModel)=>{
      this.spreadFile(file,'DELETE')
    }))
    return this.lpDialogsService.openConfirmDialog('FILE DELETION', `The file ${file.title} will be deleted`).pipe(switchMap((res:boolean)=>{ return res?request: empty()}))
  }

  getFileById(id:string){
    let url = `${API_URL}searchById/file/${id}`
    return this.http.get(url).pipe(
      map((res:any)=>{return res.file}),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }
  downloadFile(data: { src: any, file: FileModel }): Observable<any> {
    const { src, file } = data;
    return this.lpDialogsService.openConfirmDialog('DOWNLOAD FILE?', file.title).pipe(switchMap((res: boolean) => {
      if (res) {
        const request: Observable<any> = !src.includes('blob') ? this.getDbFile(file.name).pipe(map((blob: Blob) => {return { src: URL.createObjectURL(blob), title: file.title } })) : of({ src, title: file.title });
        return request.pipe(tap((res: { src: any, title: string }) => {
          const a = document.createElement("a");
          a.href = res.src;
          a.download = res.title;
          document.body.appendChild(a);
          a.click();
        }))
      } else {
        return empty();
      }
    }))
  }
}
