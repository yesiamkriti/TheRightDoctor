import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  _id?: string;
  name: string;
  age: number;
  gender: string;
  mobile: string;
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = 'http://localhost:5000/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(id: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
