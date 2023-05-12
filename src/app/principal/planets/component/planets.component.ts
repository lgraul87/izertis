import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { PlanetService } from '../services/planets.service';
import { Planets } from '../interfaces/planets.dto';

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
    private planetService: PlanetService,
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
      this.planetService.selectPage().pipe(
        tap(planets$ => {
          this.planets$ = planets$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.planetService.selectPageWithParam(page).pipe(
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
    return this.planetService.getPlanetsId(url);
  }
}
