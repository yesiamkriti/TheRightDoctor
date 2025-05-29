import { Component } from '@angular/core';
import { PersonService, Person } from '../../services/person.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  imports: [FormsModule],
  templateUrl: './add-person.html',
})
export class AddPersonComponent {
  person: Person = { name: '', age: 0, gender: '', mobile: '' };

  constructor(private service: PersonService, private router: Router) {}

  onSubmit() {
    this.service.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
