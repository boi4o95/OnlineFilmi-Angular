import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmModel } from '../models/film.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-all-film',
  templateUrl: './all-film.component.html',
  styleUrls: ['./all-film.component.css']
})
export class AllFilmComponent implements OnInit {
  films :  Observable<FilmModel[]>
  pageSize : number = 8
  currentPage : number = 1

  constructor(private filmService : FilmService, private authService : AuthService) { }

  ngOnInit() {
    this.films = this.filmService.getAllFilm()
  }

  pageChanged(page) {
    this.currentPage = page
  }

  delete(_id : string) {
    this.filmService.deleteFilm(_id).subscribe()
  }
}
