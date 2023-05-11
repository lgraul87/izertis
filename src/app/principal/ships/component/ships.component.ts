import { Component, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StarChips } from '../../interfaces/starChips.dto';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { Router } from '@angular/router';
import { setShips } from 'src/app/app.test';

const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  starChipsNgrx$: any;
  starChips$: StarChips;
  page = 1;

  constructor(
    private store: Store<{ starChips$: any }>,
    private http: HttpClient,
    private router: Router

  ) {
    this.starChipsNgrx$ = store.pipe(select('starChips$'));
  }

  ngOnInit() {
    this.starChips$ = this.starChipsNgrx$.actionsObserver._value.ships;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.starChips$.count / 10)

    if (this.page === 1) {
      this.http.get('https://swapi.dev/api/starships/').pipe(
        tap(starChips$ => {
          this.starChips$ = starChips$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.http.get('https://swapi.dev/api/starships/?page=' + page).pipe(
        tap(starChips$ => {
          this.starChips$ = starChips$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getStarshipId(url) {

    let shipId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        shipId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/starships/' + shipId + '.jpg'
  }

  navigateToShipDetail(url) {
    const ship = this.starChips$.results.filter((e:any) => e.url == url)
    this.store.dispatch(setShips(ship));

    this.router.navigate(['/principal/ship-details']);
   }

}
