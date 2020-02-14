import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'todo'; */
  public title: String = 'Minhas Tarefas';
  public todos: Todo[] = [];

  /**
   * Construtor padrão para incluir tarefas no array todos
   */
  constructor() {
      this.todos.push(new Todo(1, 'Passear com o cachorro', false));
      this.todos.push(new Todo(2, 'Ir ao supermercado', false));
      this.todos.push(new Todo(3, 'Cortar o cabelo', true));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
