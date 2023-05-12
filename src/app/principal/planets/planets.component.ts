import { Component, OnInit } from '@angular/core';
import { Planets } from '../interfaces/planets.dto';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-page-two',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetsNgrx$: any;
  planets$: Planets;
  page = 1;

  constructor(
    private store: Store<{ planets$: any }>,
    private http: HttpClient,
    private router: Router

  ) {
    this.planetsNgrx$ = store.pipe(select('planets$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.planets$ = this.planetsNgrx$.actionsObserver._value.planets;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.planets$.count / 10)

    if (this.page === 1) {
      this.http.get('https://swapi.dev/api/planets/').pipe(
        tap(planets$ => {
          this.planets$ = planets$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.http.get('https://swapi.dev/api/planets/?page=' + page).pipe(
        tap(planets$ => {
          this.planets$ = planets$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getPlanetsId(url) {

    let planetsId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        planetsId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/planets/' + planetsId + '.jpg'
  }
}
