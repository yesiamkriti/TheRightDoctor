import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html'
})
export class ListPeopleComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/edit', id]);
  }

  onDelete(id: string) {
    this.router.navigate(['/delete', id]);
  }
}
