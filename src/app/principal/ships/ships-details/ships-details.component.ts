import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  starChipNgrx$: any;
  starChip$: any;

  constructor(store: Store<{ starChips$: any }>) {
    this.starChipNgrx$ = store.pipe(select('starChips$'));
  }

  ngOnInit() {
    this.starChip$ = this.starChipNgrx$.actionsObserver._value.ships;
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

  ngOnDestory() { }
}
