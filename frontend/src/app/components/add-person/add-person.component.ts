import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent {
  person = { name: '', age: '', gender: '', mobile: '' };

  constructor(private service: PersonService, private router: Router) {}

  onSubmit() {
    this.service.addPerson(this.person).subscribe(() => this.router.navigate(['/']));
  }
}
