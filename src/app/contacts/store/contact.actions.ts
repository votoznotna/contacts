import Contact from '../contact';

import { Action } from '@ngrx/store';

export enum ContactActionTypes {
  SetCurrentContact = 'Set Current Contact',
  ClearCurrentContact = 'Clear Current Contact',
  NewContact = 'New Contact',
  Load = 'Load',
  LoadSuccess = 'Load Success',
  LoadFail = 'Load Fail',
  UpdateContact = 'Update Contact',
  UpdateContactSuccess = 'Update Contact Success',
  UpdateContactFail = 'Update Contact Fail',
  CreateContact = 'Create Contact',
  CreateContactSuccess = 'Create Contact Success',
  CreateContactFail = 'Create Contact Fail',
  DeleteContact = 'Delete Contact',
  DeleteContactSuccess = 'Delete Contact Success',
  DeleteContactFail = 'Delete Contact Fail',
  ToggleEditMode = 'Toggle Edit Mode',
  ToggleDirtyForm = 'Toggle Dirty Form'
}

export class ToggleEditMode implements Action {
  readonly type = ContactActionTypes.ToggleEditMode;

  constructor(public payload: boolean) { }
}

export class ToggleDirtyForm implements Action {
  readonly type = ContactActionTypes.ToggleDirtyForm;

  constructor(public payload: boolean) { }
}

export class SetCurrentContact implements Action {
  readonly type = ContactActionTypes.SetCurrentContact;

  constructor(public payload: Contact) { }
}

export class ClearCurrentContact implements Action {
  readonly type = ContactActionTypes.ClearCurrentContact;
}

export class NewContact implements Action {
  readonly type = ContactActionTypes.NewContact;
}

export class Load implements Action {
  readonly type = ContactActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ContactActionTypes.LoadSuccess;

  constructor(public payload: Contact[]) { }
}

export class LoadFail implements Action {
  readonly type = ContactActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class UpdateContact implements Action {
  readonly type = ContactActionTypes.UpdateContact;

  constructor(public payload: Contact) { }
}

export class UpdateContactSuccess implements Action {
  readonly type = ContactActionTypes.UpdateContactSuccess;

  constructor(public payload: Contact) { }
}

export class UpdateContactFail implements Action {
  readonly type = ContactActionTypes.UpdateContactFail;

  constructor(public payload: string) { }
}

export class CreateContact implements Action {
  readonly type = ContactActionTypes.CreateContact;

  constructor(public payload: Contact) { }
}

export class CreateContactSuccess implements Action {
  readonly type = ContactActionTypes.CreateContactSuccess;

  constructor(public payload: Contact) { }
}

export class CreateContactFail implements Action {
  readonly type = ContactActionTypes.CreateContactFail;

  constructor(public payload: string) { }
}

export class DeleteContact implements Action {
  readonly type = ContactActionTypes.DeleteContact;

  constructor(public payload: number) { }
}

export class DeleteContactSuccess implements Action {
  readonly type = ContactActionTypes.DeleteContactSuccess;

  constructor(public payload: number) { }
}

export class DeleteContactFail implements Action {
  readonly type = ContactActionTypes.DeleteContactFail;

  constructor(public payload: string) { }
}

export type ContactActions = SetCurrentContact
  | ClearCurrentContact
  | NewContact
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateContact
  | UpdateContactSuccess
  | UpdateContactFail
  | CreateContact
  | CreateContactSuccess
  | CreateContactFail
  | DeleteContact
  | DeleteContactSuccess
  | DeleteContactFail
  | ToggleEditMode
  | ToggleDirtyForm;

