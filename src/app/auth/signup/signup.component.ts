import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: RegisterModel
  loginFailed: boolean
  errMessage: string

  constructor(private authService: AuthService, private router : Router) {
    this.model = new RegisterModel('', '', '', '', '')
  }

  register() {
    delete this.model['confirmPassword']
    this.authService.register(this.model).subscribe()
  }

  ngOnInit() {
  }

}
