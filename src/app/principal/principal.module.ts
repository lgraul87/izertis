import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ShipsDetailsComponent } from './ships-details/component/ships-details.component';
import { PeopleComponent } from './people/component/people.component';
import { SpeciesComponent } from './species/component/species.component';
import { FilmsComponent } from './films/component/films.component';
import { PlanetsComponent } from './planets/component/planets.component';
import { VehiclesComponent } from './vehicles/component/vehicles.component';


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
