import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  template: `
  <app-pure-task-list
    [tasks]="tasks$ | async"
    (onArchiveTask)="archiveTask($event)"
    (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
    `,
})
export class TaskListComponent {
    tasks$?: Observable<any>;

    constructor(private store: Store) {
       this.tasks$ = store.select((state) => state.taskbox.tasks);
    }
  
    /**
     * Component method to trigger the archiveTask event
     */
    archiveTask(id: string) {
      this.store.dispatch(new ArchiveTask(id));
    }
  
    /**
     * Component method to trigger the pinTask event
     */
    pinTask(id: string) {
      this.store.dispatch(new PinTask(id));
    }
  }