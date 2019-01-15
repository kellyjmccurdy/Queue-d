import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  personForm: FormGroup;

  constructor(private _personService: PersonService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.personForm = this._form.group({
      firstName: new FormControl,
      lastName: new FormControl,
      phone: new FormControl
    })
  }

  onSubmit() {
    console.log(this.personForm);
    this._personService.createPerson(this.personForm.value).subscribe(data => {
      this._router.navigate(['/person']);
    });

}
}
