import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { ApiService } from '../../services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  room1: Event[];
  room2: Event[];
  room3: Event[];

  currentTime = new Date();

  isBusy: boolean;

  formDirective: FormGroupDirective;

  eventForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-zА-я0-9,]/)
    ]),
    date: new FormControl(this.currentTime),
    timeStart: new FormControl('', Validators.required),
    timeEnd: new FormControl('', Validators.required),
    roomId: new FormControl('1')
  });

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getEvent();
  }

  onSubmit(formDirective: FormGroupDirective): void {
    switch (this.eventForm.controls.roomId.value) {
      case '1': {
        this.checkTimeSlot(this.room1);
        break;
      }
      case '2': {
        this.checkTimeSlot(this.room2);
        break;
      }
      case '3': {
        this.checkTimeSlot(this.room3);
        break;
      }
    }

    if (this.isBusy === false) {
      this.resetForm(formDirective);
    }
  }

  getEvent(): void {
    this.apiservice.getEventData().subscribe(data => {
      this.room1 = data[0];
      this.room2 = data[1];
      this.room3 = data[2];
    });
  }

  resetForm(formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    this.eventForm.reset({
      title: '',
      date: this.currentTime,
      timeStart: '',
      timeEnd: '',
      roomId: '1'
    });
  }

  addEvent(): void {
    this.apiservice.addEvent({
      roomId: this.eventForm.controls.roomId.value,
      title: this.eventForm.controls.title.value,
      date: this.eventForm.controls.date.value,
      timeStart: this.eventForm.controls.timeStart.value,
      timeEnd: this.eventForm.controls.timeEnd.value,
    });
    this.getEvent();
  }

  checkTimeSlot(arrayOfEvents: Event[]): boolean {
    let setTimeStart = this.eventForm.controls.timeStart.value;
    let setTimeEnd = this.eventForm.controls.timeEnd.value;
    let busySlot = 0;

    arrayOfEvents.forEach((event) => {
      if ((setTimeStart >= event['timeStart'] && setTimeStart <= event['timeEnd']) || (setTimeEnd >= event['timeStart'] && setTimeEnd <= event['timeEnd'])) {
        ++busySlot;
      }
    });

    if (busySlot > 0) {
      return this.isBusy = true;
    } else {
      this.addEvent();
      return this.isBusy = false;
    }
  }
}
