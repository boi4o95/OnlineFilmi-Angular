import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: LoginModel
  loginFailed: boolean
  errMessage: string

  constructor(private authService: AuthService, private router: Router) {
    this.model = new LoginModel('', '')
  }

  login() {
    this.authService.login(this.model).subscribe()
  }
  
  ngOnInit() {
  }

}
