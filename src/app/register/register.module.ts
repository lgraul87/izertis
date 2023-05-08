import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, BrowserModule, RegisterRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [RegisterComponent]
})
export class RegisterModule { }
