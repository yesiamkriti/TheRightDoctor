import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../../services/person.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor],
  selector: 'app-list-people',
  templateUrl: './list-people.html',
})
export class ListPeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private service: PersonService, private router: Router) {}

  ngOnInit() {
    this.service.getPeople().subscribe((data) => (this.people = data));
  }

  onEdit(id: string | undefined) {
    if (id) {
      this.router.navigate(['/edit', id]);
    }
  }

  onDelete(id: string | undefined) {
    if (id) {
      this.router.navigate(['/delete', id]);
    }
  }
}
