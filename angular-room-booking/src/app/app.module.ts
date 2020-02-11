import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule
} from '@angular/material';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OwlDateTimeIntl,
  OWL_DATE_TIME_LOCALE
} from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { FormComponent, RoomsComponent } from './components';
import { ApiService } from './services';

export class DefaultIntl extends OwlDateTimeIntl {
  cancelBtnLabel = 'Отмена';
  setBtnLabel = 'Ок';
}

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
    HttpClientModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'ru' },
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
