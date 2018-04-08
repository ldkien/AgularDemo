import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addFormParent();">Add</button><button (click)="subFormParent();">Add</button>`
})

export class ChildComponent{
    @Output() myClick  = new EventEmitter<boolean>();

    addFormParent(){
        this.myClick.emit(true);
    }
    subFormParent(){
        this.myClick.emit(false);
    }
}