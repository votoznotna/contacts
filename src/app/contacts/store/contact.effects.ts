import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ContactService } from '../services/contact.service';
import Contact from '../contact';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as contactActions from './contact.actions';

@Injectable()
export class ContactEffects {

  constructor(private contactService: ContactService,
              private actions$: Actions) { }

  // @Effect()
  // loadContacts$: Observable<Action> = this.actions$.pipe(
  //   ofType(contactActions.ContactActionTypes.Load),
  //   mergeMap(action =>
  //     this.contactService.getContacts().pipe(
  //       map(contacts => (new contactActions.LoadSuccess(contacts))),
  //       catchError(err => of(new contactActions.LoadFail(err)))
  //     )
  //   )
  // );

  @Effect()
  updateContact$: Observable<Action> = this.actions$.pipe(
    ofType(contactActions.ContactActionTypes.UpdateContact),
    map((action: contactActions.UpdateContact) => action.payload),
    mergeMap((contact: Contact) =>
      this.contactService.updateContact(contact).pipe(
        map(updatedContact => (new contactActions.UpdateContactSuccess(updatedContact))),
        catchError(err => of(new contactActions.UpdateContactFail(err)))
      )
    )
  );

  @Effect()
  createContact$: Observable<Action> = this.actions$.pipe(
    ofType(contactActions.ContactActionTypes.CreateContact),
    map((action: contactActions.CreateContact) => action.payload),
    mergeMap((contact: Contact) =>
      this.contactService.createContact(contact).pipe(
        map(newContact => (new contactActions.CreateContactSuccess(newContact))),
        catchError(err => of(new contactActions.CreateContactFail(err)))
      )
    )
  );

  @Effect()
  deleteContact$: Observable<Action> = this.actions$.pipe(
    ofType(contactActions.ContactActionTypes.DeleteContact),
    map((action: contactActions.DeleteContact) => action.payload),
    mergeMap((contactId: number) =>
      this.contactService.deleteContact(contactId).pipe(
        map(() => (new contactActions.DeleteContactSuccess(contactId))),
        catchError(err => of(new contactActions.DeleteContactFail(err)))
      )
    )
  );
}
