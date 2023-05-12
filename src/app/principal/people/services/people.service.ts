import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/app/principal/people/interfaces/people.dto';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private urlPeople = 'https://swapi.dev/api/people/';
  private param = '?page=';
  private urlPeopleImage = 'https://starwars-visualguide.com/assets/img/people/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<People> {
    return this.http.get<People>(this.urlPeople);
  }

  selectPageWithParam(page): Observable<People> {
    return this.http.get<People>(this.urlPeople + this.param + page);
  }

  getPeopleId(url){
    let peopleId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        peopleId += element
      }
    }
    return this.urlPeopleImage + peopleId + '.jpg'
  }
  
}
