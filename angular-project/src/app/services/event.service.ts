import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../common/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/api/events';

  constructor(private httpClient: HttpClient) { 

  }

  getEventList(): Observable<Event[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.events)
    );
  }

}

interface GetResponse{
  _embedded: {
    events: Event[];
  }
}
