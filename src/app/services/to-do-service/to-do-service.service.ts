import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDoModel } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDoArray: ToDoModel[];

  constructor() { 
    this.toDoArray = [];
  }

  addToList(emittedValue: string){
    var modelTemp = {
      id: this.toDoArray.length,
      value: emittedValue
    };
    this.toDoArray.push(modelTemp);
    console.log('In ToDoService ', emittedValue);
    console.log('In ToDoService ', this.toDoArray);
  }

  getList(): Observable<ToDoModel[]>{
    return of(this.toDoArray);
  }
}
