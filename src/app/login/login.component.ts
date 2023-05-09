import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { 
      return 
    }else{
      this.unregistered = true;

      this.router.navigate(['/principal/ships'])

    }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios

  }
}

