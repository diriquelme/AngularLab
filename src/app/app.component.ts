import { Component } from '@angular/core';

// interface Todo {
//    task:string;
//    completed:boolean; 
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

}

// export class AppComponent {
//   title = 'To Do List in Angular';

//   tasks: Todo[] = [
//     {completed:false, task: 'Buy Ziggy food'},
//     {completed:true, task: 'Get coffee'},
//     {completed:true, task: 'Pay cellphone'},
//     {completed:true, task: 'Go to the market'},
//   ]

  
// //   todos = [{
// //     label: 'Buy Ziggy food',
// //     done: false,
// //     priority: 3
// //   },
// //   {
// //     label: 'Pay mortgage',
// //     done: true,
// //     priority: 1
// //   },
// //   {
// //     label: 'Clean yard',
// //     done: false,
// //     priority: 2
// //   },
// //   {
// //     label: 'Pay car insurance',
// //     done: false,
// //     priority: 1
// //   },
// //  ];

// //   addTodo(newTodoLabel) {
// //     const newTodo = {
// //       label: newTodoLabel,
// //       priority: 1,
// //       done: false
// //     };
// //   this.todos.push(newTodo);
// //  }
// //   deleteTodo(todo) {
// //     this.todos = this.todos.filter( t => t.label !== todo.label );
// //   }
// // newTodoTask: []=[];

//     addTodo(newTodoTask) {
//       const newTask = {
//         task: '',
//       };
//       this.tasks.push(newTodoTask);
//       // console.log(newTodoTask)
//     }

//     completeTask(task) {
//       this.tasks = this.tasks.filter(c => c.task !== task);
//     }


//  }



