import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../../config/config';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

/*   public fileSource = new Subject<FileOrder>(); */
/*   public files$ = this.fileSource.asObservable(); */

  textFormats: string[] = ['pdf'];


  constructor(private zone:NgZone,
              private http:HttpClient) {}

  /* uploadFile(file: File, download:boolean=false) {
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
  } */

  getDbFile(fileName:string){
    let url = `${URL_SERVICES}file/${fileName}`;
    return this.http.get(url, { responseType: 'blob' })
  }

  deleteFile(fileId:string,projectId:string){
    let url = `${URL_SERVICES}deleteFile/${fileId}`;
    return this.http.delete(url).pipe(map((res:any)=>{
        /* let fileOrder = new FileOrder(res.file,'delete');
        this.fileSource.next(fileOrder); */
    }))
  }

  getFileById(id:string){
    let url = `${URL_SERVICES}searchById/file/${id}`
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
