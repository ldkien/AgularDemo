import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    {name:'Le Doan Kien',age:22},
    {name:'Dang Ha Giang',age:22},
    {name:'Giang Bo',age:22},
    {name:'Kien mit',age:22},
  ]
  constructor() { }

  ngOnInit() {
  }

}
