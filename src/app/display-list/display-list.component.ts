import { Component, OnInit, Input } from '@angular/core';
import { ToDoModel } from '../models/model';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {
  @Input() emittedValue: string;
  title: string = 'To Do List';
  display: ToDoModel[];

  constructor() { }

  ngOnInit() {
    this.display = [
      {
        id: 1,
        value: 'start'
      },
      {
        id: 2,
        value: 'stop'
      }
  ]
  }
}
