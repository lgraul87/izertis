import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,BrowserModule,LoginRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [LoginComponent]
})

export class LoginModule { }
