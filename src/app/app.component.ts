import { Component } from '@angular/core';
import { ToDoService } from './services/to-do-service/to-do-service.service';
import { ToDoModel } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';
  fromAddToComponent: string;

  constructor(private toDoService: ToDoService){
  }

  getEmittedValue($event){
    this.fromAddToComponent = $event;
    this.toDoService.addToList(this.fromAddToComponent);
    console.log('In AppComponent ', this.fromAddToComponent);
  }
}
