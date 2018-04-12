import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthday = new Date(2015,10,4);
  person = {name:'Ha Giang',age:'22'};
  address = Promise.resolve('92 Le Thanh Tong');
  constructor() { }

  ngOnInit() {
  }

}
