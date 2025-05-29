import { Routes } from '@angular/router';
import { ListPeopleComponent } from './components/list-people/list-people';
import { EditPersonComponent } from './components/edit-person/edit-person';
import { DeletePersonComponent } from './components/delete-person/delete-person';
import { AddPersonComponent } from './components/add-person/add-person';

export const routes: Routes = [
  { path: '', component: ListPeopleComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent },
];

