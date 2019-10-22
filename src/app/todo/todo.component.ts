import { Component } from '@angular/core';

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
 newTask : string ='';
  tasks: Todo[] = [
    {completed:false, task: 'Buy Ziggy food'},
    {completed:true, task: 'Get coffee'},
    {completed:true, task: 'Pay cellphone'},
    {completed:true, task: 'Go to the market'},
  ]


complete:boolean = true;
    completeTask (){
        this.complete = false;
}

addTodo() {
    const newItem = {
        task: this.newTask,
        completed: false,
    };
      this.tasks.push(newItem);
      this.newTask=null;

}

}