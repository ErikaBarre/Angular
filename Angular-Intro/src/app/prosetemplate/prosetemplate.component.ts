import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prosetemplate',
  template: `<app-server></app-server>
            <app-server></app-server>`,
  styles: [`
      h3{
        color:dodgerblue;
      }
    `]
})
export class ProsetemplateComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }



}
