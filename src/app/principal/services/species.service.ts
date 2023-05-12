import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from 'src/app/shared/interfaces/species.dto';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Species> {
    return this.http.get<Species>('https://swapi.dev/api/species/');
  }

  selectPageWithParam(page): Observable<Species> {
    return this.http.get<Species>('https://swapi.dev/api/species/?page=' + page);
  }

  getSpeciesId(url){
    let specieId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        specieId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/species/' + specieId + '.jpg'
  }
  
}
