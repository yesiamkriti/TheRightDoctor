import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {
  private apiUrl = 'http://localhost:5000/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPersonById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  updatePerson(id: string, person: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
