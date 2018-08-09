import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmModel } from '../models/film.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-film',
  templateUrl: './all-film.component.html',
  styleUrls: ['./all-film.component.css']
})
export class AllFilmComponent implements OnInit {
  films :  Observable<FilmModel[]>
  constructor(private filmService : FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getAllFilm()
  }

}
