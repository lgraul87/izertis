import { Component, OnInit } from '@angular/core';
import { People } from '../../shared/interfaces/people.dto';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { PeopleService } from '../services/people.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  peopleNgrx$: any;
  people$: People;
  page = 1;

  constructor(
    private store: Store<{ people$: any }>,
    private peopleService: PeopleService,
    private router: Router
  ) {
    this.peopleNgrx$ = store.pipe(select('people$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.people$ = this.peopleNgrx$.actionsObserver._value.people;
  }

  ngOnDestory() {
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.people$.count / 10)

    if (this.page === 1) {
      this.peopleService.selectPage().pipe(
        tap(people$ => {
          this.people$ = people$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.peopleService.selectPageWithParam(page).pipe(
        tap(people$ => {
          this.people$ = people$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getPeopleId(url) {
    return this.peopleService.getPeopleId(url);
  }
}
