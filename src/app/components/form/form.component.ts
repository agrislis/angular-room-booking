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

  eventForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-zА-я0-9,]/)
    ]),
    date: new FormControl('', Validators.required),
    timeStart: new FormControl('', Validators.required),
    timeEnd: new FormControl('', Validators.required),
    roomId: new FormControl('1', Validators.required)
  });

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getEvent();
  }

  onSubmit(): void {
    this.apiservice.addEvent({
      roomId: this.eventForm.controls.roomId.value,
      title: this.eventForm.controls.title.value,
      date: this.eventForm.controls.date.value,
      timeStart: this.eventForm.controls.timeStart.value,
      timeEnd: this.eventForm.controls.timeEnd.value,
    });
    this.getEvent();
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
      date: '',
      timeStart: '',
      roomId: '1'
    });
  }
}
