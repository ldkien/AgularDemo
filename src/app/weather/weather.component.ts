import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  email:String;
  password:String;

  constructor() { }

  onSubmit(formSignIn){
    console.log(formSignIn.value);
  }
  ngOnInit() {
  }

}
