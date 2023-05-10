import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { People } from '../interfaces/People.dto';
import { Planets } from '../interfaces/Planets.dto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  people: People = {};
  planets: Planets = {};

  peopleImg = 'assets/img/people.jpg';
  planetsImg = 'assets/img/planets.jpg';
  filmsImg = 'assets/img/films.jpg';
  speciesImg = 'assets/img/species.jpg';
  vehiclesImg = 'assets/img/vehicles.jpg';
  starchipsImg = 'assets/img/starchips.jpg';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.countPeople();
    this.countPlanets();
  }


  private countPlanets() {
    this.http.get('https://swapi.dev/api/planets/').pipe(
      tap(planets => {
        this.planets = planets;
      })
    ).subscribe();
  }

  private countPeople() {
    this.http.get('https://swapi.dev/api/people/').pipe(
      tap(people => {
        this.people = people;
      })
    ).subscribe();
  }
}
