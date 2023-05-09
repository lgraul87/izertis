import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { doc, setDoc } from 'firebase/firestore';


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
  isSubmited = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async loginUser(loginForm) {

    
    this.isSubmited = true;

    // const coleccion = query(collection(this.firestore, 'account'), where('username', '==', loginForm.username), where('password', '==', loginForm.password))
    // const documentos = await getDocs(coleccion);

    const register = {
      email: "mail",
      password: "pass",
    };

    setDoc(doc(this.firestore, "account/" + "123"), register);

    if (this.loginForm.invalid) {
      return
    } else {
      this.unregistered = true;

      this.router.navigate(['/principal/ships'])

    }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios

  }
}

