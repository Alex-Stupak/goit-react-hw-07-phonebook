import axios from 'axios';

axios.defaults.baseURL = 'https://64345e331c5ed06c9595e8a0.mockapi.io/';

export async function fetchContacts() {
  const response = await axios.get('contacts');
  return response.data;
}

export async function addContact(data) {
  const response = await axios.post('contacts/', data);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}
