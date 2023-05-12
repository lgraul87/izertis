import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarShips } from 'src/app/principal/ships/interfaces/star-ships.dto';

@Injectable({
  providedIn: 'root'
})

export class StarShipService {

  private urlStarShips = 'https://swapi.dev/api/starships/';
  private param = '?page=';
  private urlStarShipsImage = 'https://starwars-visualguide.com/assets/img/starships/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<StarShips> {
    return this.http.get<StarShips>(this.urlStarShips);
  }

  selectPageWithParam(page): Observable<StarShips> {
    return this.http.get<StarShips>(this.urlStarShips + this.param + page);
  }

  getStarShipsId(url){
    let starShipId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        starShipId += element
      }
    }
    return this.urlStarShipsImage + starShipId + '.jpg'
  }
  
}
