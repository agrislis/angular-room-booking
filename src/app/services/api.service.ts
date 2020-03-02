import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/internal/operators'

import { Event } from '../interfaces';

@Injectable()
export class ApiService {

  room1: 'http://localhost:3000/room1';

  constructor(private http: HttpClient) { }

  addEvent(event: Event): void {
    const body = {
      roomId: event.roomId,
      title: event.title,
      date: event.date,
      timeStart: Date.parse(event.timeStart),
      timeEnd: Date.parse(event.timeEnd),
    };
    switch (event.roomId) {
      case '1': {
        this.http.post('http://localhost:3000/room1', body).subscribe(data => body);
        break;
      }
      case '2': {
        this.http.post('http://localhost:3000/room2', body).subscribe(data => body);
        break;
      }
      case '3': {
        this.http.post('http://localhost:3000/room3', body).subscribe(data => body);
        break;
      }
    }
  }

  getEventData(): Observable<any> {
    return forkJoin(
      this.http.get<Event[]>('http://localhost:3000/room1').pipe(
        map(data => data.sort((a, b) => {
          console.log(a.timeStart);
          return Number(a.timeStart) - Number(b.timeStart);
        }))
      ),
      this.http.get<Event[]>('http://localhost:3000/room2').pipe(
        map(data => data.sort((a, b) => {
          console.log(a.timeStart);
          return Number(a.timeStart) - Number(b.timeStart);
        }))
      ),
      this.http.get<Event[]>('http://localhost:3000/room3').pipe(
        map(data => data.sort((a, b) => {
          console.log(a.timeStart);
          return Number(a.timeStart) - Number(b.timeStart);
        }))
      )
    );
  }
}
