import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../../UI/toolbar-options';
import {ToolbarService} from '../../UI/toolbar.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService,
              private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts', []));

    this.contactService.getContacts().subscribe(response => {
      this.contacts = response;
      console.log(this.contacts);
    });
  }

  onContactSelect(contact): void {
    this.router.navigate(['/contacts', contact.id]);
  }

  onCreateNew(): void {
    this.router.navigate(['/contacts/new']);
  }

}
