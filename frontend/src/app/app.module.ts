import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DeletePersonComponent } from './components/delete-person/delete-person.component';

import { PersonService } from './services/person.service';

const routes: Routes = [
  { path: '', component: ListPeopleComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    AddPersonComponent,
    EditPersonComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
