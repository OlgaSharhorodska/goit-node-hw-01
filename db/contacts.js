
import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('db', 'contacts.json')

 export const listContacts = async () => {
   const data = await fs.readFile(contactsPath);
   return JSON.parse(data);
 };

export const getContactById = async(id) => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === id);
  return result || null;
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

export const addContact = async(data)=> {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...contacts
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}
