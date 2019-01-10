import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://localhost:44311/api';


@Injectable() 
export class EventsService {

    constructor(private _http: HttpClient) { }

    getEvents() {
      return this._http.get(`${ApiUrl}/Event`, { headers: this.getHeaders() });
    }

    createEvent(event: Event) {
      return this._http.post(`${ApiUrl}/Event`, event, { headers: this.getHeaders()});
    }

    private getHeaders() {
      return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
}