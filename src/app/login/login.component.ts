import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { UntypedFormGroup, Validators, UntypedFormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, getDocs, query, where } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  dataLoading: boolean = false;
  unregistered: boolean = false;
  invalid: boolean = false;
  isSubmited = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async loginUser(loginForm: FormGroup) {

    this.isSubmited = true;

    if (loginForm.valid) {
      const login = {
        userName: loginForm.value.userName,
        password: loginForm.value.password,
      };

      console.log(login);

      const coleccion = query(collection(this.firestore, 'account'), where('userName', '==', login.userName), where('password', '==', login.password))
      const documentos = await getDocs(coleccion);

      console.log(documentos.docs.length);

      if (documentos.docs.length == 1) {
        this.unregistered = false;
        sessionStorage.setItem('userLogged', login.userName);
        this.router.navigate(['/principal/ships'])

      } else {
        this.unregistered = true;
      }
    }
  }

}

