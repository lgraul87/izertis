import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/principal/films/interfaces/films.dto';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  private urlFilms = 'https://swapi.dev/api/films/';
  private param = '?page=';
  private urlFilmsImage = 'https://starwars-visualguide.com/assets/img/films/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Films> {
    return this.http.get<Films>(this.urlFilms);
  }

  selectPageWithParam(page): Observable<Films> {
    return this.http.get<Films>(this.urlFilms + this.param + page);
  }

  getFilmsId(url) {
    let filmId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        filmId += element
      }
    }
    return this.urlFilmsImage + filmId + '.jpg'
  }

}
