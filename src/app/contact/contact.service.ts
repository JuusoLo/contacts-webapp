import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Pekka', 'Hyysalo'));
    this.contacts.push(new Contact('Jorma', 'Pekkarinen'));
    this.contacts.push(new Contact('Kai', 'Kunnas'));
    this.contacts.push(new Contact('Teemu', 'Salami'));
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
}




