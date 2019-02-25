import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TableRequestModel } from './models/tableRequest.model';


const appKey = "kid_B1GOKdwHX"
const url = `https://baas.kinvey.com/appdata/${appKey}/request`

@Injectable()
export class RequestService { 
    constructor(private http : HttpClient) { }

    createRequest(body) {
        return this.http.post(url, body)
    }

    getAll() {
        return this.http.get<TableRequestModel[]>(url)
    }

    
    deleteFilm(_id : string) {
        return this.http.delete(url + `/${_id}`)
    }

}