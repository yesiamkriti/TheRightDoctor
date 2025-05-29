import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person = { name: '', age: '', gender: '', mobile: '' };

  constructor(private route: ActivatedRoute, private service: PersonService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPersonById(id).subscribe(data => (this.person = data));
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.updatePerson(id, this.person).subscribe(() => this.router.navigate(['/']));
  }
}
