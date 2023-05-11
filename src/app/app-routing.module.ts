import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './principal/ships/component/ships.component';
import { PageOneComponent } from './principal/page-one/page-one.component';
import { PageTwoComponent } from './principal/page-two/page-two.component';
import { PrincipalComponent } from './principal/component/principal.component';
import { ShipsDetailsComponent } from './principal/ships/ships-details/ships-details.component';

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
        { path: 'pageOne', component: PageOneComponent },
        { path: 'pageTwo', component: PageTwoComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
