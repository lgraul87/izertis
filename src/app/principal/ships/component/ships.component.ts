import { Component, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import '@angular/localize/init';
import { setShips } from 'src/app/shared/app.reducer';
import { StarShips } from 'src/app/principal/ships/interfaces/star-ships.dto';
import { StarShipService } from '../services/ships.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  starShipsNgrx$: any;
  starShips$: StarShips;
  page = 1;

  constructor(
    private store: Store<{ starChips$: any }>,
    private starShipService: StarShipService,
    private router: Router

  ) {
    this.starShipsNgrx$ = store.pipe(select('starChips$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.starShips$ = this.starShipsNgrx$.actionsObserver._value.ships;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.starShips$.count / 10)

    if (this.page === 1) {
      this.starShipService.selectPage().pipe(
        tap(starChips$ => {
          this.starShips$ = starChips$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.starShipService.selectPageWithParam(page).pipe(
        tap(starChips$ => {
          this.starShips$ = starChips$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getStarshipId(url) {
    return this.starShipService.getStarShipsId(url);
  }

  navigateToShipDetail(url) {
    const ship = this.starShips$.results.filter((e:any) => e.url == url)
    this.store.dispatch(setShips(ship));
    this.router.navigate(['/principal/ship-details']);
   }

}
