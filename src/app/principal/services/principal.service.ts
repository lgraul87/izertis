import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/principal/films/interfaces/films.dto';
import { People } from 'src/app/principal/people/interfaces/people.dto';
import { Planets } from 'src/app/principal/planets/interfaces/planets.dto';
import { Species } from 'src/app/principal/species/interfaces/species.dto';
import { StarShips } from 'src/app/principal/ships/interfaces/star-ships.dto';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';

@Injectable({
  providedIn: 'root'
})

export class PrincipalService {

  private urlSpecies = 'https://swapi.dev/api/species/';
  private urlStarShips = 'https://swapi.dev/api/starships/';
  private urlVehicles = 'https://swapi.dev/api/vehicles/';
  private urlFilms = 'https://swapi.dev/api/films/';
  private urlPlanets = 'https://swapi.dev/api/planets/';
  private urlPeople = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  countSpecies(): Observable<Species> {
    return this.http.get<Species>(this.urlSpecies);
  }

  countStarChips(): Observable<StarShips> {
    return this.http.get<StarShips>(this.urlStarShips);
  }

  countVehicles(): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.urlVehicles);
  }

  countFilms(): Observable<Films> {
    return this.http.get<Films>(this.urlFilms);
  }

  countPlanets(): Observable<Planets> {
    return this.http.get<Planets>(this.urlPlanets);
  }

  countPeople(): Observable<People> {
    return this.http.get<People>(this.urlPeople);
  }

}
