
import fs from 'fs/promises';
// import path from 'path';
import { nanoid } from 'nanoid';

const func = async () => {
  const path = ('./db/contacts.json');
  const buffer = await fs.readFile(path);
  const text = buffer.toString()
  console.log(text);
};

func()

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
