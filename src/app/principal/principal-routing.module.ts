import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

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



// [{
//   path: '', component: PrincipalComponent,
//   children: [
//     { path: 'ships', component: ShipsComponent },
//     { path: 'pageOne', component: PageOneComponent },
//     { path: 'pageTwo', component: PageTwoComponent },
//   ]
// },
// { path: '**', redirectTo: '', pathMatch: 'full' }
// ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrincipalComponentsRoutingModule { }
