import { Component, OnInit } from '@angular/core';
import { ContactModel } from './model/contact.model';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  bindingModel : ContactModel
  
  constructor(private contactService : ContactService) { 
    this.bindingModel = new ContactModel ('', '')
  }

  ngOnInit() {
  }

  contact() {
    this.contactService.post(this.bindingModel).subscribe()
  }
}
