import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './principal/ships/component/ships.component';
import { PrincipalComponent } from './principal/component/principal.component';
import { ShipsDetailsComponent } from './principal/ships-details/component/ships-details.component';
import { PeopleComponent } from './principal/people/component/people.component';
import { PlanetsComponent } from './principal/planets/component/planets.component';
import { FilmsComponent } from './principal/films/component/films.component';
import { SpeciesComponent } from './principal/species/component/species.component';
import { VehiclesComponent } from './principal/vehicles/component/vehicles.component';


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
