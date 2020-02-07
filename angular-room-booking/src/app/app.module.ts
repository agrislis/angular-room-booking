import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormComponent, RoomsComponent } from './components';
import { ApiService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
