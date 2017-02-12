import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { TodoService } from "./services";

import { TodoComponent, TodoManagerComponent } from "./components";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoComponent,
    TodoManagerComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
