import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StarChips } from '../../interfaces/starChips.dto';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  starChipsNgrx$: any;
  starChips$: StarChips;

  constructor(store: Store<{ starChips$: any }>) {
    this.starChipsNgrx$ = store.pipe(select('starChips$'));
  }

  ngOnInit() {
    console.log(this.starChipsNgrx$.actionsObserver._value);
    this.starChips$ = this.starChipsNgrx$.actionsObserver._value.ships;
  }

  ngOnDestory() {
  }

}
