import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../Services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(response => {
      this.contacts = response;
      console.log(this.contacts);
    });
  }
    onContactSelect(contact): void {
    // console.log(contact.id);
    this.router.navigate( ['/contacts', contact.id]);
}

  onCreateNew(): void {
    this.router.navigate(['/contacts/new']);
}
}
