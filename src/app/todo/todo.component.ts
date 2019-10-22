import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { discardPeriodicTasks } from '@angular/core/testing';

interface Todo {
   task:string;
   completed:boolean;
}

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent {
  title = 'To Do List in Angular';
  completed: boolean = false;
  newTask : string ='';
  tasks: Todo[] = [
    {completed:false, task: 'Buy Ziggy food'},
    {completed:true, task: 'Get coffee'},
    {completed:true, task: 'Pay cellphone'},
    {completed:true, task: 'Go to the market'},
  ]

  filterTask: string = "";
  filteredTaskItems = [...this.tasks];

  removeCompleteTask(tasks: Todo){
    const index = this.tasks.indexOf(tasks, 0);
    if (index > -1) {
    this.tasks.splice(index, 1)
    this.filteredTaskItems = [...this.tasks];
    }
  }

  filterTaskItems() {
    this.filteredTaskItems = this.tasks.filter(
      item => item.task.toLowerCase().indexOf(this.filterTask.toLowerCase()) > -1);
      if (!this.filterTask){
        this.filteredTaskItems = [...this.tasks];
      }
  }

addTask() {
    const newItem = {
        task: this.newTask,
        completed: false,
    };
      this.tasks.push(newItem);
      this.filteredTaskItems = [...this.tasks];
      this.newTask=null;
}

completeTask (tasks: Todo){
  tasks.completed = !tasks.completed;
}

}