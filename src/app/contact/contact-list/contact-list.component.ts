import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact('Pekka', 'Hyysalo'));
    this.contacts.push(new Contact('Jorma', 'Pekkarinen'));
    this.contacts.push(new Contact('Kai', 'Kunnas'));
    console.log(this.contacts);


  }
