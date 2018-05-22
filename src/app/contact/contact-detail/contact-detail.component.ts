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
  }

  ngOnInit() {

    this.contactId = this.route.snapshot.paramMap.get('id');
      let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = true;
        toolbarActions = [];
    } else {
      // View/Edit contact
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
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.contactService.createContact(this.contact).subscribe(response => {
        this.contact = response;
        console.log('Created contact');
        console.log(this.contact);
        const toolbarActions: ToolbarAction[] = [new ToolbarAction(this.onEdit.bind(this),
          'edit')]; this.toolbar.toolbarOptions.next(
          new ToolbarOptions('Contact', toolbarActions));
      });
    } else {
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response=> {
        console.log(response);
      });
    }
  }

  onEdit() {
    console.log('TODO: activate/deactivate edit mode');
    this.editingEnabled = !this.editingEnabled;
  }
}
