import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule]
})
export class HomeModule { }
