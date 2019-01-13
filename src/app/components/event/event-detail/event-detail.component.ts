import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event
  constructor(private _activatedRoute: ActivatedRoute, private _eventService: EventsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventService.getEvent(routeData.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
      });
    });
  }

}
