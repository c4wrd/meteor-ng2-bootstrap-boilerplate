import { TodoCollection } from "../../../both/collections/todo.collection";
import { Todo } from "../../../both/models/todo.model"

export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (TodoCollection.find({}).cursor.count() === 0) {
      const data: Todo[] = [
        {
          task: "Learn Meteor",
          completed: true
        },
        {
          task: "Master Bootstrap?",
          completed: false
        }
      ];
      data.forEach((obj: Todo) => {
        TodoCollection.insert(obj);
      });
    }
  }
}
