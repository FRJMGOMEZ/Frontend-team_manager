import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../../config/config';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FileOrder, FileModel } from '../models/file.model';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  public fileSource = new Subject<FileOrder>();
  public files$ = this.fileSource.asObservable();

  textFormats: string[] = ['pdf'];


  constructor(private zone:NgZone,
              private http:HttpClient) {}

  uploadFile(file: File, download:boolean=false) {
     this.zone.run( ()=>{
       let formData = new FormData();
       let xhr = new XMLHttpRequest();
       let url;     
         formData.append('file',file,file.name);
         url = `${URL_SERVICES}upload-file/${download}`
       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             let file = JSON.parse(xhr.response).file;
             let fileOrder = new FileOrder(file, 'post')
             console.log({fileOrder})
             this.fileSource.next(fileOrder)
           }
           else {
             console.log('UPDATING PROCCESS HAS FAILED');
             console.log(xhr.responseText)
           }
          };
         }
       xhr.open('PUT', url, true);
       xhr.send(formData)
     })
  }

  downloadFile(url:string){
    return this.http.get(url, { observe: 'response', responseType: 'blob' })
  }

  getAwsImg(file:FileModel){
    let url = `${URL_SERVICES}get-aws-img/${file.name}`;
    return this.http.get(url).pipe(map((res:any)=>{
      return res.data
    }))
  }

  deleteFile(fileId:string,projectId:string){
    let url = `${URL_SERVICES}deleteFile/${fileId}`;
    return this.http.delete(url).pipe(map((res:any)=>{
        let fileOrder = new FileOrder(res.file,'delete');
        this.fileSource.next(fileOrder);
    }))
  }

  getFileById(id:string){
    let url = `${URL_SERVICES}searchById/file/${id}`
    return this.http.get(url).pipe(map((res:any)=>{
      return res.file
    }))
  }
}
