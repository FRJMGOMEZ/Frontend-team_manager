import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../../shared/models/file.model';
import { of } from 'rxjs';
import { FilesService } from '../../shared/providers/files.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'lpFileIcon'
})
export class LpFileIconPipe implements PipeTransform {

  constructor(private filesService: FilesService, private domSanitizer: DomSanitizer){}

  private textFormats = [{ format: 'word', mime: 'application/msword' },
                           { format: 'odt', mime:'application/vnd.oasis.opendocument.text'},
                           { format:'xml', mime:'text/xml'},
                           { format:'pdf', mime:'application/pdf'}]

  transform(file: FileModel): unknown {
    let textFormat = this.textFormats.find((f)=>{ return f.mime === file.mimeType})
    if(textFormat){
      return of(`../../../assets/icons/files/${textFormat.format}.png`)
    }
    return  this.filesService.getAwsImg(file.name).pipe(map((res)=>{  
      return this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(res))
    }))
  }
}
