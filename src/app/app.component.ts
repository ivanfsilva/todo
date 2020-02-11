import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'todo'; */
  public title: String = 'Minhas Tarefas';
  public todos: any[] = [];

  /**
   * Construtor padrão para incluir tarefas no array todos
   */
  constructor() {
      this.todos.push('Item 1');
      this.todos.push('Item 2');
      this.todos.push('Item 3');
  }
}
