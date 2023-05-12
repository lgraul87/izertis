import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { ShipsDetailsComponent } from './ships-details/component/ships-details.component';
import { PeopleComponent } from './people/component/people.component';
import { PlanetsComponent } from './planets/component/planets.component';
import { FilmsComponent } from './films/component/films.component';
import { SpeciesComponent } from './species/component/species.component';
import { VehiclesComponent } from './vehicles/component/vehicles.component';

const routes: Routes =
  [
    { path: '', component: PrincipalComponent },
    { path: 'ships', component: ShipsComponent },
    { path: 'ship-details', component: ShipsDetailsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'species', component: SpeciesComponent },
    { path: 'vehicles', component: VehiclesComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrincipalComponentsRoutingModule { }
