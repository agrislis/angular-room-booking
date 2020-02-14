import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../interfaces';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  @Input() room1: Event[];
  @Input() room2: Event[];
  @Input() room3: Event[];

  constructor() { }

  ngOnInit() {
  }
}
