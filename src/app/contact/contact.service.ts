import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {ContactHttpService} from './Services/contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Pekka', 'Hyysalo' ));
    this.contacts.push(new Contact(2, 'Paavo', 'Pekkarinen'));
    this.contacts.push(new Contact(3, 'Kaitsu', 'Koikkeli'));
    this.contacts.push(new Contact(4, 'Teemu', 'Salami'));
    */
  }/*
  getContacts(): Contact[] {
    return this.contacts;
  }
  */
  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}




