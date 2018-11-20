import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { GlobalFormComponent } from './global-form/global-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
