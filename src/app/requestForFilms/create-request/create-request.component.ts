import { Component, OnInit } from '@angular/core';
import { CreateRequestModel } from '../models/createRequest.models';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  bindingModel : CreateRequestModel
  constructor(private requestService : RequestService ) { 
    this.bindingModel = new CreateRequestModel('', '', 0, '')
  }

  ngOnInit() {
  }

  createRequest() {
    this.requestService.createRequest(this.bindingModel).subscribe()
  }

}
