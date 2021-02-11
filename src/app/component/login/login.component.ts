import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mailCtrl: FormControl;
  pswCtrl: FormControl;
  form: FormGroup;
  login: Login;
  erreur: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router,private fb: FormBuilder) { 
    this.mailCtrl=this.fb.control('',Validators.required);
    this.pswCtrl=this.fb.control('',Validators.required);
    this.form=this.fb.group({
      mail: this.mailCtrl,
      psw: this.pswCtrl,
    });
  }

  ngOnInit(): void {
  }

  public logging() {
    this.loginService.auth(new Login(this.mailCtrl.value,this.pswCtrl.value)).subscribe(
      (result) => {
        sessionStorage.setItem(
          'tokenId',
          btoa(`${this.mailCtrl.value}:${this.pswCtrl.value}`)
        );
        sessionStorage.setItem('login', this.mailCtrl.value);
        this.router.navigate(['/salarie/list']);
      },
      (error) => {
        this.erreur = true;
      }
    );
  }
}
