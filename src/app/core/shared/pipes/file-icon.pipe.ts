import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { FilesService } from '../providers/files.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { FileModel } from '../../models/file.model';

@Pipe({
  name: 'fileIcon'
})
export class FileIconPipe implements PipeTransform {

  constructor(private filesService: FilesService, private domSanitizer: DomSanitizer){}

  private textFormats = [{ icon:'word', mime: 'application/msword' },
                           { icon:'odt', mime:'application/vnd.oasis.opendocument.text'},
                           { icon:'xml', mime:'text/xml'},
                           { icon:'pdf', mime:'application/pdf'},
                           { icon:'word', mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'},
                           { icon: 'xml', mime:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'},
                           { icon: 'text', mime:'text/plain'}]
                           
  transform(file: FileModel | File): unknown {
    let textFormat = this.textFormats.find((f)=>{ return f.mime === file.type})
    if(textFormat){
      return of(`../../../assets/icons/files/${textFormat.icon}.png`)
    }
   if(file instanceof File){
      return of(this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file)))
   }
    return this.filesService.getDbFile(file.name).pipe(map((res)=>{  
      return this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(res))
    }))
  }
}
