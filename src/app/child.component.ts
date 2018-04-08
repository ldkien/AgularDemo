import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<h3><button (click)="addFormParent();">Add</button></h3>`
})

export class ChildComponent{
    @Output() myClick  = new EventEmitter();

    addFormParent(){
        this.myClick.emit();
    }
}