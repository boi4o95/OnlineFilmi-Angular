import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { ContactModel } from "./model/contact.model";

const appKey = "kid_B1GOKdwHX"
const contactUrl = `https://baas.kinvey.com/appdata/${appKey}/contact`
   
@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private http : HttpClient) { }

    
    post(model : ContactModel) {
        return this.http.post(contactUrl, model)
    }
}