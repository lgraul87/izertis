import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../component/interfaces/vehicles.dto';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { setVehicles } from 'src/app/app.test';
import '@angular/localize/init';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehiclesNgrx$: any;
  vehicles$: Vehicles;
  page = 1;

  constructor(
    private store: Store<{ vehicles$: any }>,
    private http: HttpClient,
    private router: Router

  ) {
    this.vehiclesNgrx$ = store.pipe(select('vehicles$'));
  }

  ngOnInit() {
    this.vehicles$ = this.vehiclesNgrx$.actionsObserver._value.vehicles;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.vehicles$.count / 10)

    if (this.page === 1) {
      this.http.get('https://swapi.dev/api/vehicles/').pipe(
        tap(vehicles$ => {
          this.vehicles$ = vehicles$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.http.get('https://swapi.dev/api/vehicles/?page=' + page).pipe(
        tap(vehicles$ => {
          this.vehicles$ = vehicles$;
        })
      ).subscribe();
    }
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getVehiclesId(url) {

    let vehiclesId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        vehiclesId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/vehicles/' + vehiclesId + '.jpg'
  }
}
