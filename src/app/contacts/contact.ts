export default interface Contact {
  id: number | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  note: string;
}

export const EmptyContact: Contact = {
  id: 0,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  note: ''
};

