import { Pipe, PipeTransform } from '@angular/core';
import Contact from '../contact';

@Pipe({ name: 'sortByLastName' })
export class SortByLastName implements PipeTransform {

  transform(array: Array<Contact>): Array<Contact> {
    if (!array) {
      return null;
    }
    return array.sort((a: Contact, b: Contact) => {
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
  }
}
