import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

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
      Type: new FormControl(this.event.typeOfEvent),
      Information: new FormControl(this.event.information),
      Location: new FormControl(this.event.location),
      StartTime: new FormControl(this.event.startTime),
      Price: new FormControl(this.event.price),
      Assigned: new FormControl(this.event.isAssigned),
      Paid: new FormControl(this.event.isPaid),
      Complete: new FormControl(this.event.isCompleted),
      Expired: new FormControl(this.event.isExpired)
    });
  }

  onSubmit(form) {
    const updateEvent: Event = {
      eventEntityID: form.value.EventId,
      eventTitle: form.value.Title,
      typeOfEvent: form.value.Type,
      information: form.value.Information,
      location: form.value.Location,
      startTime: form.value.StartTime,
      price: form.value.Price,
      isAssigned: form.value.Assigned,
      isPaid: form.value.Paid,
      isCompleted: form.value.Complete,
      isExpired: form.value.Expired
    }
    
    this._eventService.updateEvent(updateEvent).subscribe(d => {
      this._router.navigate(['/events']);
    })
  }

}
