import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planets } from 'src/app/shared/interfaces/planets.dto';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Planets> {
    return this.http.get<Planets>('https://swapi.dev/api/planets/');
  }

  selectPageWithParam(page): Observable<Planets> {
    return this.http.get<Planets>('https://swapi.dev/api/planets/?page=' + page);
  }

  getPlanetsId(url){
    let planetId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        planetId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/planets/' + planetId + '.jpg'
  }
  
}
