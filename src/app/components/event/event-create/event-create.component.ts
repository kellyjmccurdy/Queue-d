import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _eventService: EventsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this._form.group({
      eventTitle: new FormControl,
      information: new FormControl
    });
  }

  onSubmit() {
    this._eventService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/events']);
    })
  }

}
