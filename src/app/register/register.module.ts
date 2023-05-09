import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, FormsModule],
  exports: []
})
export class RegisterModule { }
