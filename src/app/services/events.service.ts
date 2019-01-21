import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/Event';
import { Api_Url } from 'src/environments/environment.prod';

// const ApiUrl = 'https://localhost:44311/api';


@Injectable() 
export class EventsService {

    constructor(private _http: HttpClient) { }

    getEvents() {
      return this._http.get(`${Api_Url}/Event`, { headers: this.getHeaders() });
    }

    createEvent(event: Event) {
      return this._http.post(`${Api_Url}/Event`, event, { headers: this.getHeaders()});
    }

    getEvent(id: string) {
      return this._http.get(`${Api_Url}/Event/${id}`, { headers: this.getHeaders() });
    }

    deleteEvent(id: number) {
      return this._http.delete(`${Api_Url}/Event/${id}`, { headers: this.getHeaders() });
    }

    updateEvent(event: Event) {
      return this._http.put(`${Api_Url}/Event`, event, { headers: this.getHeaders() });
    }

    private getHeaders() {
      return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}