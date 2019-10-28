import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import Contact from '../contact';

@Component({
  selector: 'hho-contact-view',
  templateUrl: './contact-view.component.html'
})
export class ContactViewComponent implements OnInit, OnChanges {

  @Input() selectedContact: Contact;
  @Output() edit = new EventEmitter<boolean>();
  @Output() create = new EventEmitter<Contact>();
  @Output() init = new EventEmitter<Contact>();

  contact: Contact | null;

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

  ngOnInit(): void {
    this.displayContact(this.selectedContact);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedContact) {
      const contact: any = changes.selectedContact.currentValue as Contact;
      this.displayContact(contact);
    }
  }

  displayContact(contact: Contact | null): void {
    this.contact = contact;
  }

  newContact(): void {
    this.init.emit();
  }

  goEdit(): void {
    this.edit.emit(true);
  }

  withBreakLines(value: string): string {
    return value.replace(/\n/g, '<br>');
  }

}
