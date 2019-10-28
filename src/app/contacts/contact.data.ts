import { InMemoryDbService } from 'angular-in-memory-web-api';

import Contact from './contact';

export const InitContacts: Contact[] = [
  {
    id: 1,
    firstName: 'Adam',
    lastName: 'Acer',
    phone: '399–692–7753',
    email: 'adam.acer@gmail.com',
    address: '99 Weiland Way Cupertino\nCA 95014\nUnited States',
    note: 'Adam’s California address'
  },
  {
    id: 2,
    firstName: 'Scott',
    lastName: 'Anderson',
    phone: '408–345–1234',
    email: 'scott.anderson@yahoo.com',
    address: '233 El Camino Rd Sunnyvale CA\n96093\nUnited States',
    note: 'Scott’s California address'
  },
  {
    id: 3,
    firstName: 'Mac',
    lastName: 'Barter',
    phone: '415–235–3094',
    email: 'mac.barter@hotmail.com',
    address: '43 Market Street San Francisco\nCA 94104\nUnited States',
    note: 'Mac’s California address'
  },
  {
    id: 4,
    firstName: 'Jeremy',
    lastName: 'Bee',
    phone: '650–435–5345',
    email: 'eremy.bee@hotmail.com',
    address: '132 Foster City Blvd Foster City\nCA 94404\nUnited States',
    note: 'Jeremy’s California address'
  },
  {
    id: 5,
    firstName: 'Harold',
    lastName: 'Curtis',
    phone: '510–249–3500',
    email: 'harold.curtis@tesla.com',
    address: '45500 Fremont Blvd\nCA 94538\nUnited States',
    note: 'Harold’s California address'
  },

];

export const updateInitData = (data: Contact[]) => {
  InitContacts.length = 0;
  data.forEach(item => InitContacts.push(item));
};

export class ContactData implements InMemoryDbService {

    createDb() {
        const contacts: Contact[] = InitContacts;
        return { contacts };
    }
}
