import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarOptions} from '../../UI/toolbar-options';
import {ToolbarService} from '../../UI/toolbar.service';
import {ToolbarAction} from '../../UI/toolbar-action';
import {MatSnackBar} from '@angular/material';

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
              private contactService: ContactService, private toolbar: ToolbarService, public snackBar: MatSnackBar) {
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
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }
  onSave(message: string, action: string): void {
    if (this.contactId == null) {
      // Create contact
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.snackBar.open('Contact created', 'Close', {
          duration: 3000
        });
      });
    } else {
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        console.log(response);
        this.snackBar.open('Changes saved', 'Close', {
          duration: 3000
        });
      });
    }
  }


  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      this.snackBar.open('Editing enabled', 'Close', {
        duration: 1500
      });
      // Edit mode on
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete_sweep'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      // Edit mode of
      toolbarActions = [
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
      this.snackBar.open('Editing disabled', 'Close', {
        duration: 1500
      });
    }

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));

  }
  onDelete() {
    this.editingEnabled = true;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
      this.snackBar.open('Contact deleted', 'Close', {
        duration: 3000
      });
    });
  }
}
