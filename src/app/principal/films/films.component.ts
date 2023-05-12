import { Component, OnInit } from '@angular/core';
import { Films } from '../component/interfaces/films.dto';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { setFilms } from 'src/app/app.test';
import '@angular/localize/init';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  filmsNgrx$: any;
  films$: Films;
  page = 1;

  constructor(
    private store: Store<{ films$: any }>,
    private http: HttpClient,
    private router: Router

  ) {
    this.filmsNgrx$ = store.pipe(select('films$'));
  }

  ngOnInit() {
    this.films$ = this.filmsNgrx$.actionsObserver._value.films;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.films$.count / 10)

    if (this.page === 1) {
      this.http.get('https://swapi.dev/api/films/').pipe(
        tap(films$ => {
          this.films$ = films$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.http.get('https://swapi.dev/api/films/?page=' + page).pipe(
        tap(films$ => {
          this.films$ = films$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getFilmsId(url) {

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
