import { IpService } from './../ip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css'],
  providers : [IpService]
})
export class HttpServiceComponent implements OnInit {

  constructor(private ipService : IpService) {
    this.ipService.getIp().then(ip => console.log(ip)).catch(ex =>console.log(ex));
  }

  ngOnInit() {
  }

}
