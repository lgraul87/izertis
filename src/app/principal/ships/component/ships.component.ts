import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../services/ships.service';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe(ships => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
    })
  }

  ngOnDestory() {
    // Empty ondestroy function to resolve the error
 }
}
