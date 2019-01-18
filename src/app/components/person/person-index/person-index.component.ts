import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

columnNames = ['personEntityId', 'firstName', 'lastName', 'phone', 'edit','delete'];
dataSource: MatTableDataSource<Person>;

  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPersons().subscribe((persons: Person[]) => {
      this.dataSource = new MatTableDataSource<Person>(persons);
      console.log(this.dataSource);
    })
  }

}
