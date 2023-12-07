
import fs from 'fs';
// import path from 'path';
import { nanoid } from 'nanoid';

fs.readFile('././db/contacts.json', (error, data) => {
  console.log(error.message);
  console.log(data);
})

const contactsPath = require('./db/contacts.json')
console.log(contactsPath);

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код. Возвращает массив контактов.
}

function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта.
}
