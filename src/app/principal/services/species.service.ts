import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from 'src/app/shared/interfaces/species.dto';

@Injectable({
  providedIn: 'root'
})

export class SpecieService {

  private urlSpecies = 'https://swapi.dev/api/species/';
  private param = '?page=';
  private urlSpeciesImage = 'https://starwars-visualguide.com/assets/img/species/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Species> {
    return this.http.get<Species>(this.urlSpecies);
  }

  selectPageWithParam(page): Observable<Species> {
    return this.http.get<Species>(this.urlSpecies + this.param + page);
  }

  getSpeciesId(url){
    let specieId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        specieId += element
      }
    }
    return this.urlSpeciesImage + specieId + '.jpg'
  }
  
}
