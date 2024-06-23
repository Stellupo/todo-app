import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { StoreModule, provideStore } from "@ngrx/store";
import { TodoModule } from "./todo/todo.module";
import { appStore } from "./store/store";
import { provideEffects } from "@ngrx/effects";
import { FormsModule } from "@angular/forms";
import { todoReducer } from "./store/reducers";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    StoreModule.forRoot({ todoReducer }),
  ],
  declarations: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    provideStore(appStore),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
