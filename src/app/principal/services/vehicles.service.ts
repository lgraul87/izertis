import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private urlVehicles = 'https://swapi.dev/api/vehicles/';
  private param = '?page=';
  private urlVehiclesImage = 'https://starwars-visualguide.com/assets/img/vehicles/';

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.urlVehicles);
  }

  selectPageWithParam(page): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.urlVehicles + this.param + page);
  }

  getVehiclesId(url){
    let vehicleId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        vehicleId += element
      }
    }
    return this.urlVehiclesImage + vehicleId + '.jpg'
  }
  
}
