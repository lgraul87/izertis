import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';

const routes: Routes =
  [
    { path: '', component: PrincipalComponent },
    { path: 'ships', component: ShipsComponent },
    { path: 'ship-details', component: ShipsDetailsComponent },
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
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
