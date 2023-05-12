import { Component, OnInit } from '@angular/core';
import { Species } from '../interfaces/species.dto';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { setSpecies } from 'src/app/app.test';
import '@angular/localize/init';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  speciesNgrx$: any;
  species$: Species;
  page = 1;

  constructor(
    private store: Store<{ species$: any }>,
    private http: HttpClient,
    private router: Router

  ) {
    this.speciesNgrx$ = store.pipe(select('species$'));
  }

  ngOnInit() {
    this.species$ = this.speciesNgrx$.actionsObserver._value.species;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.species$.count / 10)

    if (this.page === 1) {
      this.http.get('https://swapi.dev/api/species/').pipe(
        tap(species$ => {
          this.species$ = species$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.http.get('https://swapi.dev/api/species/?page=' + page).pipe(
        tap(species$ => {
          this.species$ = species$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getSpeciesId(url) {

    let speciesId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        speciesId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/species/' + speciesId + '.jpg'
  }
}
