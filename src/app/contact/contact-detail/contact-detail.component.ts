import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../Services/contact.service';
import {Contact} from '../contact';
import {ToolbarOptions} from '../../UI/toolbar-options';
import {ToolbarService} from '../../UI/toolbar.service';
import {ToolbarAction} from '../../UI/toolbar-action';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  editingEnabled: boolean;
  contact: Contact;
  contactId: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {
    this.toolbar.toolbarOptions.next(
      new ToolbarOptions (true, 'Contact', [new ToolbarAction(this.onEdit.bind(this), 'edit')])
    );

    this.contactId = this.route.snapshot.paramMap.get('id');
      let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = true;
        toolbarActions = [];
    } else {
      // View/Edit contact
      this.editingEnabled = false;
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }
    this.toolbar.toolbarOptions.next(
      new ToolbarOptions(
         true, 'Contact', toolbarActions));
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
      });
    } else {
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        console.log(response);
      });
    }
  }

  onEdit() {
    this.editingEnabled = !this.editingEnabled;
  }
  onDelete() {
    this.editingEnabled = true;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
