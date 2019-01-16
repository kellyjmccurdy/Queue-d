import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {

  person: Person;

  constructor(private _personService: PersonService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._personService.getPerson(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._personService.deletePerson(this.person.personEntityId).subscribe(() => {
      this._router.navigate(['/person']);
    });
  }

}
