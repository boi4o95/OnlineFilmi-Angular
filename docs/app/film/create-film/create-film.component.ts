import { Component, OnInit } from '@angular/core';
import { CreateFilmModel } from '../models/create-film.models';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {
  bindingModel : CreateFilmModel

  constructor(private filmService : FilmService) { 
    this.bindingModel = new CreateFilmModel('', '', '', 0, '', '')
  }

  ngOnInit() {
  }

  create() {
    this.filmService.createFilm(this.bindingModel).subscribe()
  }

}
