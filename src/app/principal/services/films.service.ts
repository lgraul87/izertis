import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/shared/interfaces/films.dto';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Films> {
    return this.http.get<Films>('https://swapi.dev/api/films/');
  }

  selectPageWithParam(page): Observable<Films> {
    return this.http.get<Films>('https://swapi.dev/api/films/?page=' + page);
  }

  getFilmsId(url){
    let filmId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        filmId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/films/' + filmId + '.jpg'
  }
  
}
