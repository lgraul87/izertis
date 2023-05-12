import { Component, OnInit } from '@angular/core';
import { Species } from '../../shared/interfaces/species.dto';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { SpecieService } from '../services/species.service';

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
    private specieService: SpecieService,
    private router: Router

  ) {
    this.speciesNgrx$ = store.pipe(select('species$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.species$ = this.speciesNgrx$.actionsObserver._value.species;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.species$.count / 10)

    if (this.page === 1) {
      this.specieService.selectPage().pipe(
        tap(species$ => {
          this.species$ = species$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.specieService.selectPageWithParam(page).pipe(
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
    return this.specieService.getSpeciesId(url);
  }
}
