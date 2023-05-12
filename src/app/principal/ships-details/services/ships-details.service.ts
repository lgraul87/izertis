import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StarShipDetailService {

  private StarShipDetailImage = 'https://starwars-visualguide.com/assets/img/starships/';

  constructor(private http: HttpClient) { }

  getStarShipsId(url){
    let starShipId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        starShipId += element
      }
    }
    return this.StarShipDetailImage + starShipId + '.jpg'
  }

}
