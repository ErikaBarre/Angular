import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prose',
  templateUrl: './prose.component.html',
  styleUrls: ['./prose.component.css']
})
export class ProseComponent implements OnInit {

  allowNewServer = false;
  serverCreateStatus = 'no server created';
  serverName = 'two way bingind';
  serverCreated = false;
  servers = ['TEST','PPO'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated() {
      this.serverCreated = true;
      this.serverCreateStatus = 'server created';
      this.servers.push('PROD');
  }

  onUpdateServerName(event: Event) {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetServerName(){
      this.serverName = '';
  }
}
