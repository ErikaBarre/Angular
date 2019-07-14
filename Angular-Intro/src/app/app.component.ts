import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`.white-text{
              color: white;
              font-weight: bold;
            }`
          ]
})
export class AppComponent {
  title = 'net-fabthechemist-basic-app';
  showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());


  }

}
