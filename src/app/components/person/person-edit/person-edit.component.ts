import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;

  editPersonForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _personService: PersonService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
    
    this._ar.paramMap.subscribe(p => {
      this._personService.getPerson(p.get('id')).subscribe((singlePerson: Person) => {
        this.person = singlePerson;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editPersonForm = this._form.group({
      PersonID: new FormControl(this.person.personEntityId),
      First: new FormControl(this.person.firstName),
      Last: new FormControl(this.person.lastName),
      Phone: new FormControl(this.person.phone),
    });
  }

  onSubmit(form) {
    const updatePerson: Person = {
      personEntityId: form.value.PersonID,
      firstName: form.value.First,
      lastName: form.value.Last,
      phone: form.value.Phone,
    }
    this._personService.updatePerson(updatePerson).subscribe(d => {
      this._router.navigate(['/person']);
    })
  }

}
