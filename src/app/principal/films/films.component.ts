import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { Films } from 'src/app/shared/interfaces/films.dto';
import { FilmService } from '../services/films.service';

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
    private filmService: FilmService,
    private store: Store<{ films$: any }>,
    private router: Router
  ) {
    this.filmsNgrx$ = store.pipe(select('films$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.films$ = this.filmsNgrx$.actionsObserver._value.films;
  }

  ngOnDestory() {
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.films$.count / 10)

    if (this.page === 1) {
      this.filmService.selectPage().pipe(
        tap(films$ => {
          this.films$ = films$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.filmService.selectPageWithParam(page).pipe(
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
    return this.filmService.getFilmsId(url);
  }
}
