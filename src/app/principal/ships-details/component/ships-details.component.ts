import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StarShipDetailService } from '../services/ships-details.service';

@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  starChipNgrx$: any;
  starChip$: any;

  constructor(
    store: Store<{ starChips$: any }>,
    private starShipDetailService: StarShipDetailService,

    ) {
    this.starChipNgrx$ = store.pipe(select('starChips$'));
  }

  ngOnInit() {
    this.starChip$ = this.starChipNgrx$.actionsObserver._value.ships;
  }

  getStarshipId(url) {
    return this.starShipDetailService.getStarShipsId(url);
  }

  ngOnDestory() { }
}
