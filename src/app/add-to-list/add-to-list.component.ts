import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoModel } from '../models/model';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss']
})
export class AddToListComponent implements OnInit {
  @Output() toDoValue: EventEmitter<string>;
  title: string = "To Do list";

  constructor() { 
    this.toDoValue = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  emitValue(eventValue: string){
    console.log('In AddToListComponent', eventValue);
    this.toDoValue.emit(eventValue);
  }
}
