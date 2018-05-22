import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
  }
  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }
  createContact (contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }
}




