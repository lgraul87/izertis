import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Films } from '../interfaces/films.dto';
import { Species } from '../interfaces/species.dto';
import { Vehicles } from '../interfaces/vehicles.dto';
import { Store } from "@ngrx/store";
import { setFilms, setPeople, setPlanets, setShips, setSpecies, setVehicles } from 'src/app/app.test';
import { Router } from '@angular/router';
import { StarChips } from '../interfaces/star-chips.dto';
import { People } from '../interfaces/people.dto';
import { Planets } from '../interfaces/planets.dto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  people$: People = {};
  planets$: Planets = {};
  films$: Films = {};
  species$: Species = {}
  vehicles$: Vehicles = {};
  starChips$: StarChips = {}

  peopleImg = 'assets/img/people.jpg';
  planetsImg = 'assets/img/planets.jpg';
  filmsImg = 'assets/img/films.jpg';
  speciesImg = 'assets/img/species.jpg';
  vehiclesImg = 'assets/img/vehicles.jpg';
  starchipsImg = 'assets/img/starchips.jpg';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{
      starChips$: any,
      species$: any
    }>,
  ) {

    //  this.count$ = store.pipe(select('count'));
    //  this.starChips$ = store.pipe(select('ships$'));
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
  }


  private countSpecies() {
    this.http.get('https://swapi.dev/api/species/').pipe(
      tap(species$ => {
        this.species$ = species$;
        // this.store.dispatch(setSpecies(this.species$));
      })
    ).subscribe();
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

  navigateToShips() {
    this.store.dispatch(setShips(this.starChips$));
    this.router.navigate(['/principal/ships']);
  }
  navigateToSpecies() {
    this.store.dispatch(setSpecies(this.species$));
    this.router.navigate(['/principal/species']);
  }

  navigateToPlanets() {
    this.store.dispatch(setPlanets(this.planets$));
    this.router.navigate(['/principal/planets']);
  }

  navigateToVehicles() {
    this.store.dispatch(setVehicles(this.vehicles$));
    this.router.navigate(['/principal/vehicles']);
  }

  navigateToPeople() {
    this.store.dispatch(setPeople(this.people$));
    this.router.navigate(['/principal/people']);
  }

  navigateToFilms() {
    this.store.dispatch(setFilms(this.films$));
    this.router.navigate(['/principal/films']);
  }

}
