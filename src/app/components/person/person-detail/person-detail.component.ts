import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

person: Person;
token: Token;
  constructor(private _activatedRoute: ActivatedRoute, private _personService: PersonService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._personService.getPerson(routeData.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
      });
    });
  }

}
