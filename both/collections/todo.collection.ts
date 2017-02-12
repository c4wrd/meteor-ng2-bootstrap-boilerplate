import { MongoObservable } from "meteor-rxjs";
import { Todo } from "../models/todo.model";

export let TodoCollection = new MongoObservable.Collection<Todo>("todos");