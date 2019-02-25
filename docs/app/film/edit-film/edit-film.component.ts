import { Component, OnInit } from '@angular/core';
import { CreateFilmModel } from '../models/create-film.models';
import { FilmService } from '../film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {
  _id : string
  bindingModel :CreateFilmModel

  constructor(private filmService : FilmService, private route : ActivatedRoute) {
    this._id = this.route.snapshot.params['_id']
  }

  ngOnInit() {
    this.filmService.getFilmById(this._id).subscribe((data) => {
      this.bindingModel = data
    })
  }

  edit() {
    this.filmService.editFilm(this._id, this.bindingModel).subscribe()
  }
  
}
