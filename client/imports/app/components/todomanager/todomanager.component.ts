import { Component } from '@angular/core';
import { Observable } from "rxjs";
import template from "./todomanager.component.html";
import style from "./todomanager.component.scss";

import { Todo } from "../../../../../both/models/todo.model";
import { TodoService } from "../../services";

@Component({
    selector: 'todo-manager',
    template: template,
    styles: [style]
})
export class TodoManagerComponent {

    todos: Observable<Todo[]>;
    
    constructor(public todoService: TodoService) {
        this.todos = todoService.getTodos();
    }

    toggleTodo(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

}
