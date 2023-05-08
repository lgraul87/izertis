import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal.component';

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
  ]
})
export class PrincipalModule { }