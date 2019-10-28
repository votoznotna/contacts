import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import { ContactState } from './contact.reducer';
import { EmptyContact } from '../contact';

const getContactState = createFeatureSelector<ContactState>('contacts');

export const getCurrentContactId = createSelector(
    getContactState,
    state => state.currentContactId
);

export const getCurrentContact = createSelector(
    getContactState,
    getCurrentContactId,
    (state, currentContactId) => {
        if (currentContactId === 0) {
            return {...EmptyContact};
        } else {
            return currentContactId ? state.contacts.find(p => p.id === currentContactId) : null;
        }
    }
);

export const getContacts = createSelector(
    getContactState,
    state => state.contacts
);

export const getError = createSelector(
    getContactState,
    state => state.error
);

export const getEditMode = createSelector(
  getContactState,
  state => state.editMode
);
