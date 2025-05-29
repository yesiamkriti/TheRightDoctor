import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../../services/person.service';
import { FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-edit-person',
  templateUrl: './edit-person.html',
})
export class EditPersonComponent implements OnInit {
  person: Person = { name: '', age: 0, gender: '', mobile: '' };
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getPeople().subscribe((people) => {
      const p = people.find((p) => p._id === this.id);
      if (p) this.person = p;
    });
  }

  onSubmit() {
    this.service.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
