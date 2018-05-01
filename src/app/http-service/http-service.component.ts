import { IpService } from './../ip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css'],
  providers : [IpService]
})
export class HttpServiceComponent implements OnInit {
  ip:String;

  constructor(private ipService : IpService) {
    
  }

  ngOnInit() {
    this.ipService.getIp().then(ip => this.ip=ip).catch(ex =>console.log(ex));
  }

}
