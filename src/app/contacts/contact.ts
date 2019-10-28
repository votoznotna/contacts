export default interface Contact {
  id: number | undefined;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  note: string;
}

export const EmptyContact: Contact = {
  id: undefined,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  note: ''
};

