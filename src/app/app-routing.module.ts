import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './principal/ships/component/ships.component';
import { PeopleComponent } from './principal/people/people.component';
import { PlanetsComponent } from './principal/planets/planets.component';
import { PrincipalComponent } from './principal/component/principal.component';
import { ShipsDetailsComponent } from './principal/ships/ships-details/ships-details.component';
import { SpeciesComponent } from './principal/species/species.component';
import { FilmsComponent } from './principal/films/films.component';
import { VehiclesComponent } from './principal/vehicles/vehicles.component';

const routes: Routes =
  [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path: 'principal', loadChildren: () => import(`./principal/principal.module`).then(m => m.PrincipalModule),
      children: [
        { path: '', component: PrincipalComponent },
        { path: 'ships', component: ShipsComponent },
        { path: 'ship-details', component: ShipsDetailsComponent },
        { path: 'people', component: PeopleComponent },
        { path: 'planets', component: PlanetsComponent },
        { path: 'films', component: FilmsComponent },
        { path: 'species', component: SpeciesComponent },
        { path: 'vehicles', component: VehiclesComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
