import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  constructor(private http : Http) {
    this.http.get('http://ip.jsontest.com')
    .toPromise()
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(ex => console.log(ex));
  }

  ngOnInit() {
  }

}
