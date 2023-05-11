import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
// Components
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './component/principal.component';
import { ShipsComponent } from './ships/component/ships.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
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