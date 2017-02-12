import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableCursor } from "meteor-rxjs";
import { Todo } from "../../../../both/models/todo.model"
import { TodoCollection } from "../../../../both/collections/todo.collection";

@Injectable()
export class TodoService {

    private todoList: ObservableCursor<Todo>;

    constructor() {
        this.todoList = TodoCollection.find({});
    }

    getTodos(): Observable<Todo[]> {
        return this.todoList.zone();
    }

    createTodo(task: string) {
        TodoCollection.insert({
            task,
            completed: false
        });
    }

    toggleTodo(todo: Todo) {
        TodoCollection.update(todo._id, {
            $set: {
                completed: !todo.completed
            }
        })
    }

}
