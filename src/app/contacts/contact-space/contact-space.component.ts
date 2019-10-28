import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, zip, of } from 'rxjs';
import { groupBy, mergeMap, concatMap, map, toArray, reduce} from 'rxjs/operators';

import { ContactState } from '../store/contact.reducer';
import * as contactActions from '../store/contact.actions';
import * as contactSelectors from '../store/contact.selectors';
import Contact from '../contact';

@Component({
  selector: 'hho-contact-space',
  templateUrl: './contact-space.component.html',
})
export class ContactSpaceComponent implements OnInit {
  // contacts$: Observable<[string, Contact[]]>;
  contacts$: Observable<Contact[]>;
  selectedContact$: Observable<Contact>;
  errorMessage$: Observable<string>;
  editMode$: Observable<boolean>;

  constructor(private store: Store<ContactState>) {}

  ngOnInit(): void {
    this.store.dispatch(new contactActions.Load());
    this.contacts$ = this.store.pipe(select(contactSelectors.getContacts));
    this.errorMessage$ = this.store.pipe(select(contactSelectors.getError));
    this.selectedContact$ = this.store.pipe(select(contactSelectors.getCurrentContact));
    this.editMode$ = this.store.pipe(select(contactSelectors.getEditMode));
    this.editMode$.subscribe(val => console.log('edit', val));
  }

  newContact(): void {
    this.store.dispatch(new contactActions.NewContact());
    this.editMode(true);
  }

  contactSelected(contact: Contact): void {
    this.store.dispatch(new contactActions.SetCurrentContact(contact));
    this.editMode(false);
  }

  deleteContact(contact: Contact): void {
    this.store.dispatch(new contactActions.DeleteContact(contact.id));
    this.newContact();
  }

  clearContact(): void {
    this.store.dispatch(new contactActions.ClearCurrentContact());
  }
  saveContact(contact: Contact): void {
    this.store.dispatch(new contactActions.CreateContact(contact));
    this.editMode(false);
  }

  updateContact(contact: Contact): void {
    this.store.dispatch(new contactActions.UpdateContact(contact));
    this.editMode(false);
  }

  editMode(value: boolean): void {
    this.store.dispatch(new contactActions.ToggleEditMode(value));
  }

}

