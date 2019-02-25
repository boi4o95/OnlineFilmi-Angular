import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { ContactModel } from "./model/contact.model";


const contactUrl = "https://api.emailjs.com/api/v1.0/email/send"

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private http: HttpClient) { }


    post(model: ContactModel) {
        var form = {
            service_id: "gmail",
            template_id: "template_ivtT1ISk",
            user_id: "user_GuwBPJ7ATUPSP7gSS97JS",
            template_params: {
                email: model.email,
                message: model.message
            },
        }

        return this.http.post(contactUrl, form)
    }
}