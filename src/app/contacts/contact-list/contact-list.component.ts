import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Contact from '../contact';

@Component({
  selector: 'hho-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  @Input() errorMessage: string;
  @Input() contacts: Contact[];
  @Input() selectedContact: Contact;
  @Input() dirtyForm: boolean;
  @Output() selected = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<Contact>();
  @Output() clearCurrent = new EventEmitter<void>();

  ngOnInit() {
    console.log(this.contacts);
  }

  contactSelected(contact: Contact): void {
    if (this.dirtyForm && (contact.id !== this.selectedContact.id)) {
      if (!confirm(`Confirm to revoke the changes of the contact: ${this.selectedContact.firstName} ${this.selectedContact.lastName}?`)) {
        return;
      }
    }
    if (this.dirtyForm && (contact.id === this.selectedContact.id)) {
      return;
    }
    this.selected.emit(contact);
  }

  deleteContact(contact: Contact): void {
    if (contact && contact.id) {
      if (confirm(`Confirm delete the contact: ${contact.firstName} ${contact.lastName}?`)) {
        this.delete.emit(contact);
      }
    }
  }

}
