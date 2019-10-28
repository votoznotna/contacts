import Contact from '../contact';
import { ContactActionTypes, ContactActions } from './contact.actions';
import { getInitData, updateInitData } from '../contact.data';

export interface ContactState {
  currentContactId: number | null;
  contacts: Contact[];
  editMode: boolean;
  error: string;
}

const initialState: ContactState = {
  currentContactId: null,
  contacts: getInitData(),
  editMode: true,
  error: ''
};

const localStoreName = 'javascript_contacts';

function readLocalStorage() {
  const state = window.localStorage.getItem(localStoreName) && JSON.parse(window.localStorage.getItem('javascript_contacts'));
  if (state && state.contacts && state.contacts.length > 0) {
    updateInitData(state.contacts);
    return state;
  }
  window.localStorage.removeItem(localStoreName);
  updateInitData(getInitData());
  return null;
}

function saveStateInLocalStore(state: ContactState) {
  window.localStorage.setItem(localStoreName, JSON.stringify(state));
}

export function reducer(state = readLocalStorage() || initialState, action: ContactActions): ContactState {

  let ret: ContactState;

  switch (action.type) {

    case ContactActionTypes.SetCurrentContact:
      ret = {
        ...state,
        currentContactId: action.payload.id
      };
      break;

    case ContactActionTypes.ClearCurrentContact:
      return {
        ...state,
        currentContactId: null
      };

    case ContactActionTypes.NewContact:
      ret = {
        ...state,
        currentContactId: 0
      };
      break;

    case ContactActionTypes.LoadSuccess:
      ret = {
        ...state,
        contacts: action.payload,
        error: ''
      };
      break;

    case ContactActionTypes.LoadFail:
      ret = {
        ...state,
        contacts: [],
        error: action.payload
      };
      break;

    case ContactActionTypes.UpdateContactSuccess:
      const updatedContacts = state.contacts.map(
        item => action.payload.id === item.id ? action.payload : item);
      ret = {
        ...state,
        contacts: updatedContacts,
        currentContactId: action.payload.id,
        error: ''
      };
      break;

    case ContactActionTypes.UpdateContactFail:
      ret = {
        ...state,
        error: action.payload
      };
      break;

    case ContactActionTypes.CreateContactSuccess:
      ret = {
        ...state,
        contacts: [...state.contacts, action.payload],
        currentContactId: action.payload.id,
        error: ''
      };
      break;

    case ContactActionTypes.CreateContactFail:
      ret = {
        ...state,
        error: action.payload
      };
      break;

    case ContactActionTypes.DeleteContactSuccess:
      ret = {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
        currentContactId: null,
        error: ''
      };
      break;

    case ContactActionTypes.DeleteContactFail:
      ret = {
        ...state,
        error: action.payload
      };
      break;

    case ContactActionTypes.ToggleEditMode:
    return {
      ...state,
      editMode: action.payload
    };

    default:
      ret = state;
  }
  saveStateInLocalStore(ret);

  return ret;
}
