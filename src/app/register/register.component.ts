import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { UntypedFormGroup, Validators, UntypedFormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;
  dataLoading: boolean = false;
  isSubmited = false;
  isAccountRegistered = false;


  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      userName: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],

    })
  }

  async registerUser(registerForm: FormGroup) {
    this.isSubmited = true;
    if (registerForm.valid) {

      const register = {
        firstName: registerForm.value.firstName,
        lastName: registerForm.value.lastName,
        userName: registerForm.value.userName,
        password: registerForm.value.password,
      };

      const coleccion = query(collection(this.firestore, 'account'), where('userName', '==', register.userName))
      const documentos = await getDocs(coleccion);

      if (documentos.docs.length == 0) {
        this.isAccountRegistered = false;
        sessionStorage.setItem('userLogged', register.userName);
        setDoc(doc(this.firestore, "account/" + register.userName), register);
        this.router.navigate(['/principal'])
      } else {
        this.isAccountRegistered = true;
      }
    }
  }

}
