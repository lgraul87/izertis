import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { PeopleComponent } from './people/people.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeciesComponent } from './species/species.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    PeopleComponent,
    SpeciesComponent,
    FilmsComponent,
    PlanetsComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgbPaginationModule
  ]

})

export class PrincipalModule { }
