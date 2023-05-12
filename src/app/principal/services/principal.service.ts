import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/shared/interfaces/films.dto';
import { People } from 'src/app/shared/interfaces/people.dto';
import { Planets } from 'src/app/shared/interfaces/planets.dto';
import { Species } from 'src/app/shared/interfaces/species.dto';
import { StarShips } from 'src/app/shared/interfaces/star-ships.dto';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  countSpecies(): Observable<Species> {
    return this.http.get<Species>('https://swapi.dev/api/species/');
  }

  countStarChips(): Observable<StarShips> {
    return this.http.get<StarShips>('https://swapi.dev/api/starships/');
  }

  countVehicles(): Observable<Vehicles> {
    return this.http.get<Vehicles>('https://swapi.dev/api/vehicles/');
  }

  countFilms(): Observable<Films> {
    return this.http.get<Films>('https://swapi.dev/api/films/');
  }

  countPlanets(): Observable<Planets> {
    return this.http.get<Planets>('https://swapi.dev/api/planets/');
  }

  countPeople(): Observable<People> {
    return this.http.get<People>('https://swapi.dev/api/people/');
  }

}
