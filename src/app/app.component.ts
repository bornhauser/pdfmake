import {AfterViewInit, Component} from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {dd} from './pdf';

@Component({
  selector: 'app-root',
  template: `

    <div class="iframe-container">
      <iframe id="iframe"></iframe>
    </div>
    <style>
      .iframe-container {
        width: 100%;
        height: 100%;
        text-align: center;
      }

      #iframe {
        display: inline-block;
        width: 600px;
        height: 900px;
        border: 1px solid #dedede;
      }
    </style>

  `,
})
export class AppComponent implements AfterViewInit {

  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngAfterViewInit(): void {
    const pdfDocGenerator = pdfMake.createPdf(dd);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      const iframe = document.querySelector('iframe');
      iframe.src = dataUrl;
    });
  }

}
