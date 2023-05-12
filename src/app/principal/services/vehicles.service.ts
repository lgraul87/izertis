import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  selectPage(): Observable<Vehicles> {
    return this.http.get<Vehicles>('https://swapi.dev/api/vehicles/');
  }

  selectPageWithParam(page): Observable<Vehicles> {
    return this.http.get<Vehicles>('https://swapi.dev/api/vehicles/?page=' + page);
  }

  getVehiclesId(url){
    let vehicleId = '';
    for (let index = 0; index < url.length; index++) {
      const element = url[index];
      if (!isNaN(parseInt(element))) {
        vehicleId += element
      }
    }
    return 'https://starwars-visualguide.com/assets/img/vehicles/' + vehicleId + '.jpg'
  }
  
}
