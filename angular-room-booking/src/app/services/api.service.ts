import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { Event } from '../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  addEvent(event: Event) {
    const body = { title: event.title };
    switch(event.title) {
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
      this.http.get('http://localhost:3000/room1'),
      this.http.get('http://localhost:3000/room2'),
      this.http.get('http://localhost:3000/room3')
    );
  }
}