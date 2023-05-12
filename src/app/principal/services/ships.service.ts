import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarShips } from 'src/app/shared/interfaces/star-ships.dto';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<StarShips> {
    return this.http.get<StarShips>('https://swapi.dev/api/starships/');
  }

  selectPageWithParam(page): Observable<StarShips> {
    return this.http.get<StarShips>('https://swapi.dev/api/starships/?page=' + page);
  }

  getStarShipsId(url){
    let starShipId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        starShipId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/starships/' + starShipId + '.jpg'
  }
  
}
