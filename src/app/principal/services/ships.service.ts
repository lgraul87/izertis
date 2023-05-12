import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from '../interfaces/species.dto';
import { StarChips } from '../interfaces/star-chips.dto';
import { Vehicles } from '../interfaces/vehicles.dto';
import { Films } from '../interfaces/films.dto';
import { Planets } from '../interfaces/planets.dto';
import { People } from '../interfaces/people.dto';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  countSpecies(): Observable<Species> {
    return this.http.get<Species>('https://swapi.dev/api/species/');
  }

  countStarChips(): Observable<StarChips> {
    return this.http.get<StarChips>('https://swapi.dev/api/starships/');
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
