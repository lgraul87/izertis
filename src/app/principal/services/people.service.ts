import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/app/shared/interfaces/people.dto';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<People> {
    return this.http.get<People>('https://swapi.dev/api/people/');
  }

  selectPageWithParam(page): Observable<People> {
    return this.http.get<People>('https://swapi.dev/api/people/?page=' + page);
  }

  getPeopleId(url){
    let peopleId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        peopleId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/peoples/' + peopleId + '.jpg'
  }
  
}
