import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableCursor } from "meteor-rxjs";
import { Todo } from "../../../../both/models/todo.model";
import { TodoCollection } from "../../../../both/collections/todo.collection";

@Injectable()
export class TodoService {

    private apiTokens: ObservableCursor<Todo>;

    constructor() {
        this.apiTokens = TodoCollection.find({});
    }

    getTodos(): Observable<Todo[]> {
        return this.apiTokens.zone();
    }

    createTodo(task: string) {
        TodoCollection.insert({
            task,
            completed: false
        });
    }

}
