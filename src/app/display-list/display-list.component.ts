import { Component, OnInit, Input } from '@angular/core';
import { ToDoModel } from '../models/model';
import { ToDoService } from '../services/to-do-service/to-do-service.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {
  @Input() emittedValue: string;
  title: string = 'To Do List';
  display: ToDoModel[];
  // testDisplay$: Observable<ToDoModel[]>;

  constructor(private toDoService: ToDoService) { 
    this.display = [];
  }

  ngOnInit() {
    this.toDoService.getList().subscribe((result: ToDoModel[]) => {
      this.display = result;
    });
  }
}
