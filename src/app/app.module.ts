import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OwlDateTimeIntl,
  OWL_DATE_TIME_LOCALE
} from 'ng-pick-datetime';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

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
    MatCardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'ru' },
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
