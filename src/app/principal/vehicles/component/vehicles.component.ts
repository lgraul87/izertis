import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import '@angular/localize/init';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';
import { VehicleService } from '../../services/vehicles.service';

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
    private vehicleService: VehicleService,
    private router: Router

  ) {
    this.vehiclesNgrx$ = store.pipe(select('vehicles$'));
  }

  ngOnInit() {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    }
    this.vehicles$ = this.vehiclesNgrx$.actionsObserver._value.vehicles;
  }

  ngOnDestory() {
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
    const maxSize = Math.ceil(this.vehicles$.count / 10)

    if (this.page === 1) {
      this.vehicleService.selectPage().pipe(
        tap(vehicles$ => {
          this.vehicles$ = vehicles$;
        })
      ).subscribe();
    }

    if (this.page > 1 && this.page < maxSize + 1) {
      this.vehicleService.selectPageWithParam(page).pipe(
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
    return this.vehicleService.getVehiclesId(url);
  }
}
