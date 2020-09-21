import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlOperationsService {

  constructor() { }

  formatTextToHtml(text: string) {
    let content: string[] = [];
    content = text.split('\n');
    let message = [];
    content.forEach((extract) => {
      if (extract === '') {
        message.push('<br>')
      } else {
        let extractSplitted = extract.split(' ')
        extractSplitted.forEach((piece: string, index: number) => {
          if (piece === '') {
            extractSplitted[index] = '&nbsp'
          }
        })
        let p = `<p>${extractSplitted.join(' ')}</p>`;
        let pSplit = p.split('\n');
        pSplit.forEach((piece, index) => {
          message.push(piece)
        })
      }
    })
    return message.join(' ')
  }
}
