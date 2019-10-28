import { Pipe, PipeTransform } from '@angular/core';
import Contact from '../contact';

@Pipe({ name: 'sortByLastNameWithCapital' })
export class SortByLastName implements PipeTransform {

  transform(array: Array<Contact>): Array<Contact> {
    if (!array) {
      return null;
    }
    array.sort((a: Contact, b: Contact) => {
      const first = a.lastName.charAt(0).toUpperCase();
      const last = b.lastName.charAt(0).toUpperCase();
      if (first < last) {
        return -1;
      } else if (first > first) {
        return 1;
      } else {
        return 0;
      }
    });
    let currentCapital = '';
    const getCapital = (val: string) => val.charAt(0).toUpperCase();
    return array.map(item => {
      const itemCapital = getCapital(item.lastName);
      const retItem = {...item, capital: ''};
      if (currentCapital !== itemCapital) {
        retItem.capital = itemCapital;
        currentCapital = itemCapital;
      }
      return retItem;
    });
  }
}
