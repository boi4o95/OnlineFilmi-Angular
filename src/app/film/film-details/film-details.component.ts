import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../models/film.model';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film : Observable<FilmModel>
  _id : string

  constructor(
    private route : ActivatedRoute, 
    private filmService : FilmService
   ) { 
    this._id = this.route.snapshot.params['_id']
  }

  ngOnInit() {
    this.film = this.filmService.getFilmDetails(this._id)
  }

}
