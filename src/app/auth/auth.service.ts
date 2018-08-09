import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { LoginModel } from "./models/login.model"
import { RegisterModel } from "./models/register.model"

const appKey = "kid_B1GOKdwHX" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable()
export class AuthService {
    constructor(private http : HttpClient) { }

    login(model : LoginModel) {
        return this.http.post(loginUrl, JSON.stringify(model))
    }

    register (model : RegisterModel) {
        return this.http.post(registerUrl, JSON.stringify(model))
    }

    logout () {
        return this.http.post(logoutUrl, {})
    }

    checkIfLoggedIn() {
        return localStorage.getItem('authtoken') !== null
    }

    
}