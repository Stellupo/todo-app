import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule, provideStore } from '@ngrx/store';
import { TodoModule } from './todo/todo.module';
import { appEffects, appStore } from './store/store';
import { provideEffects } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync(),
    provideStore(appStore),
    provideEffects(appEffects),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
