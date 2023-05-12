import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { Router } from '@angular/router';
import { setFilms, setPeople, setPlanets, setShips, setSpecies, setVehicles } from 'src/app/app.reducer';
import { StarShips } from 'src/app/shared/interfaces/star-ships.dto';
import { People } from 'src/app/shared/interfaces/people.dto';
import { Planets } from 'src/app/shared/interfaces/planets.dto';
import { Films } from 'src/app/shared/interfaces/films.dto';
import { Species } from 'src/app/shared/interfaces/species.dto';
import { Vehicles } from 'src/app/shared/interfaces/vehicles.dto';
import { PrincipalService } from '../services/principal.service';

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
  starChips$: StarShips = {}

  peopleImg = 'assets/img/people.jpg';
  planetsImg = 'assets/img/planets.jpg';
  filmsImg = 'assets/img/films.jpg';
  speciesImg = 'assets/img/species.jpg';
  vehiclesImg = 'assets/img/vehicles.jpg';
  starchipsImg = 'assets/img/starchips.jpg';

  constructor(
    private http: HttpClient,
    private principalService: PrincipalService,
    private router: Router,
    private store: Store  <{
      starChips$: any,
      species$: any
      vehicles$: any
      films$: any
      planets$: any
      people$: any 
    }>
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('userLogged')) {
      this.router.navigate(['']);
    } else {
      this.countPeople();
      this.countPlanets();
      this.countFilms();
      this.countSpecies();
      this.countVehicles();
      this.countStarChips();
    }
  }

  ngOnDestory() {
  }

  private countSpecies() {
    this.principalService.countSpecies().pipe(
      tap(species$ => {
        this.species$ = species$;
      })
    ).subscribe();
  }

  private countStarChips() {
    this.principalService.countStarChips().pipe(
      tap(starChips$ => {
        this.starChips$ = starChips$;
      })
    ).subscribe();
  }

  private countVehicles() {
    this.principalService.countVehicles().pipe(
      tap(vehicles$ => {
        this.vehicles$ = vehicles$;
      })
    ).subscribe();
  }

  private countFilms() {
    this.principalService.countFilms().pipe(
      tap(films$ => {
        this.films$ = films$;
      })
    ).subscribe();
  }

  private countPlanets() {
    this.principalService.countPlanets().pipe(
      tap(planets$ => {
        this.planets$ = planets$;
      })
    ).subscribe();
  }

  private countPeople() {
    this.principalService.countPeople().pipe(
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
