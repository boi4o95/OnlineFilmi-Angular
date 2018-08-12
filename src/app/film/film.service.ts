import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CreateFilmModel } from './models/create-film.models';
import { FilmModel } from './models/film.model';

const appKey = "kid_B1GOKdwHX"
const filmsUrl = `https://baas.kinvey.com/appdata/${appKey}/films`

@Injectable()
export class FilmService { 
    constructor(private http : HttpClient) { }

    createFilm(body : CreateFilmModel) {
        return this.http.post(filmsUrl, body)
    }

    getAllFilm() {
        return this.http.get<FilmModel[]>(filmsUrl)
    }

    getFilmById(_id : string) {
        return this.http.get<FilmModel>(filmsUrl + `/${_id}`)
    }

    deleteFilm(_id : string) {
        return this.http.delete(filmsUrl + `/${_id}`)
    }

    editFilm(_id : string, body) {
        return this.http.put(filmsUrl + `/${_id}`, body)
    }
}