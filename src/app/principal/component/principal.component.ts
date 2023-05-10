import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { People } from '../interfaces/People.dto';
import { Planets } from '../interfaces/Planets.dto';
import { Films } from '../interfaces/films.dto';
import { Species } from '../interfaces/species.dto';
import { Vehicles } from '../interfaces/vehicles.dto';
import { StarChips } from '../interfaces/starChips.dto';
import { Store, select } from "@ngrx/store";
import { decrement, increment, reset } from 'src/app/app.reducer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  people$: People = {};
  planets$: Planets = {};
  films$: Films = {};
  species$: Species = {};
  vehicles$: Vehicles = {};
  starChips$: StarChips = {};
  count$: Observable<any>;

  peopleImg = 'assets/img/people.jpg';
  planetsImg = 'assets/img/planets.jpg';
  filmsImg = 'assets/img/films.jpg';
  speciesImg = 'assets/img/species.jpg';
  vehiclesImg = 'assets/img/vehicles.jpg';
  starchipsImg = 'assets/img/starchips.jpg';

  constructor(
    private http: HttpClient,
    private store: Store<{ count: number }>,
    ) {

    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {

    this.countPeople();
    this.countPlanets();
    this.countFilms();
    this.countSpecies();
    this.countVehicles();
    this.countStarChips();
  }

  ngOnDestory() {
    // Empty ondestroy function to resolve the error
 }

  alert() {
    alert('ll');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }


  private countStarChips() {
    this.http.get('https://swapi.dev/api/starships/').pipe(
      tap(starChips$ => {
        this.starChips$ = starChips$;
      })
    ).subscribe();
  }

  private countVehicles() {
    this.http.get('https://swapi.dev/api/vehicles/').pipe(
      tap(vehicles$ => {
        this.vehicles$ = vehicles$;
      })
    ).subscribe();
  }

  private countSpecies() {
    this.http.get('https://swapi.dev/api/species/').pipe(
      tap(species$ => {
        this.species$ = species$;
      })
    ).subscribe();
  }

  private countFilms() {
    this.http.get('https://swapi.dev/api/films/').pipe(
      tap(films$ => {
        this.films$ = films$;
      })
    ).subscribe();
  }

  private countPlanets() {
    this.http.get('https://swapi.dev/api/planets/').pipe(
      tap(planets$ => {
        this.planets$ = planets$;
      })
    ).subscribe();
  }

  private countPeople() {
    this.http.get('https://swapi.dev/api/people/').pipe(
      tap(people$ => {
        this.people$ = people$;
      })
    ).subscribe();
  }
}
