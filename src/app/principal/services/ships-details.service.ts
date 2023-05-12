import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarShipDetailService {

  constructor(private http: HttpClient) { }

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
