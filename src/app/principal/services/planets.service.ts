import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planets } from 'src/app/shared/interfaces/planets.dto';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  private urlPlanets = 'https://swapi.dev/api/planets/';
  private param = '?page=';
  private urlPlanetsImage = 'https://starwars-visualguide.com/assets/img/planets/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Planets> {
    return this.http.get<Planets>(this.urlPlanets);
  }

  selectPageWithParam(page): Observable<Planets> {
    return this.http.get<Planets>(this.urlPlanets + this.param + page);
  }

  getPlanetsId(url){
    let planetId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        planetId += element
      }
    }
    return this.urlPlanetsImage + planetId + '.jpg'
  }
  
}
