import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Event;

  editEventForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _eventService: EventsService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
    
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEvent(p.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editEventForm = this._form.group({
      EventId: new FormControl(this.event.eventEntityID),
      Title: new FormControl(this.event.eventTitle),
      Information: new FormControl(this.event.information)
    });
  }

  onSubmit(form) {
    const updateEvent: Event = {
      eventEntityID: form.value.EventId,
      eventTitle: form.value.Title,
      information: form.value.Information
    };
    this._eventService.updateEvent(updateEvent).subscribe(d => {
      this._router.navigate(['/events']);
    });
  }

}
