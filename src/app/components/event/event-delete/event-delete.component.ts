import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  event: Event;

  constructor(private _eventService: EventsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._eventService.deleteEvent(this.event.eventEntityID).subscribe(() => {
      this._router.navigate(['/events']);
    });
  }

}
