import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { TableRequestModel } from '../models/tableRequest.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {
  table :  Observable<TableRequestModel[]>

  constructor(private requestService : RequestService) { }

  ngOnInit() {
    this.table = this.requestService.getAll()
  }
  
  delete(_id : string) {
    this.requestService.deleteFilm(_id).subscribe()
  }
}
