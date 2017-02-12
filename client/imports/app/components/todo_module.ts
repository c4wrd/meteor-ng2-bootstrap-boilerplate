import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TodoComponent } from "./todo/todo.component";
import { TodoManagerComponent } from "./todomanager/todomanager.component";

@NgModule({
    declarations: [
        TodoComponent,
        TodoManagerComponent
    ],
    imports: [
        NgbModule
    ]
})
export class TodoModule {
    
}