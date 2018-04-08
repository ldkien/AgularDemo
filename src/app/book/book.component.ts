import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  filterStatus = 'XEM_TAT_CA';
  isShowForm = false;
  english='';
  arrWord = [
    {id:1,vi:'kien',en:'mit',mem:true},
    {id:2,vi:'giang',en:'boo',mem:false},
    {id:3,vi:'dang',en:'ha giang',mem:true},
    {id:4,vi:'doan',en:'kien',mem:true},
    {id:5,vi:'ld',en:'kien',mem:false},
    {id:6,vi:'man',en:'hong',mem:true},
    {id:7,vi:'minh',en:'hoang',mem:false},
    {id:8,vi:'dc',en:'anh',mem:true},
    {id:9,vi:'thuy',en:'dam',mem:true},
    {id:10,vi:'hiep',en:'nguyen',mem:false},
  ];
  constructor() { }

  ngOnInit() {
  }

  showForm(){
    this.isShowForm = !this.isShowForm;
  }
  xoa(id : number) {
    const index = this.arrWord.findIndex(e => e.id===id);
    console.log(index);
    this.arrWord.splice(index,1);
  }
  filter(mem:boolean){
    if(this.filterStatus=='XEM_TAT_CA'){
      return true;
    }
    if(this.filterStatus=='XEM_DA_NHO'&&mem){
      return true;
    }
    if(this.filterStatus=='XEM_CHUA_NHO'&&!mem){
      return true;
    }

    return false;
  }

}
