import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Contact from '../contact';
import { FormValidator } from '../../common/form.validator';

@Component({
  selector: 'hho-contact-edit',
  templateUrl: './contact-edit.component.html'
})
export class ContactEditComponent implements OnInit, OnChanges {
  @Input() errorMessage: string;
  @Input() selectedContact: Contact;
  @Output() edit = new EventEmitter<boolean>();
  @Output() init = new EventEmitter<Contact>();
  @Output() create = new EventEmitter<Contact>();
  @Output() update = new EventEmitter<Contact>();
  @Output() dirtyForm = new EventEmitter<boolean>();

  private formValidator: FormValidator;

  contactForm: FormGroup;

  private formIsDirty = false;

  contact: Contact | null;

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      firstName: {
        required: 'First Name is required.',
        minlength: 'First Name must be at least two characters.',
        maxlength: 'First Name cannot exceed 30 characters.',
      },
      lastName: {
        required: 'Last Name is required.',
        minlength: 'Last Name must be at least two characters.',
        maxlength: 'Last Name cannot exceed 30 characters.',
      }
    };
    this.formValidator = new FormValidator(this.validationMessages);
  }

  ngOnInit(): void {
    // Define the form group
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required,
                         Validators.minLength(2),
                         Validators.maxLength(30)]],
      lastName: ['', [Validators.required,
                          Validators.minLength(2),
                          Validators.maxLength(30)]],
      phone: '',
      email: '',
      address: '',
      note: ''
    });


    this.contactForm.valueChanges.subscribe(
      value => {
        this.displayMessage = this.formValidator.processMessages(this.contactForm);
        if (!this.formIsDirty && this.contactForm.dirty) {
          this.formIsDirty = true;
          this.dirtyForm.emit(this.formIsDirty);
        }
      }
    );

    this.displayContact(this.selectedContact);
  }

  blur(): void {
    this.displayMessage = this.formValidator.processMessages(this.contactForm);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.selectedContact) {
      const contact: any = changes.selectedContact.currentValue as Contact;
      this.displayContact(contact);
    }
  }

  displayContact(contact: Contact | null): void {
    if (!this.contactForm) {
      return;
    }
    this.contact = contact;

    if (this.contact) {
      this.contactForm.reset();

      // Update the data on the form
      this.contactForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        email: this.contact.email,
        phone: this.contact.phone,
        address: this.contact.address,
        note: this.contact.note
      });
    }
  }

  cancelEdit(): void {
    this.displayContact(this.contact);
  }

  saveContact(): void {
    if (this.contactForm.dirty === false) {
        this.edit.emit(false);
    } else if (this.contactForm.valid) {
        const p = { ...this.contact, ...this.contactForm.value };
        if (!p.id) {
          this.create.emit(p);
        } else {
          this.update.emit(p);
        }
        this.dirtyForm.emit(false);
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  newContact(): void {
    if (this.contactForm.dirty) {
      if (!confirm(`Confirm to revoke the changes of the contact: ${this.contact.firstName} ${this.contact.lastName}?`)) {
        return;
      }
    }
    this.init.emit();
  }

}
