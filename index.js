import * as contactsService from './db/contacts.js'

const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsService.listContacts();
            break;
        case 'get':
            const getContactById = await contactsService.getContactById(id);
            break;
        case 'add':
            const addContact = await contactsService.addContact(name, email, phone);
            break;
        case 'remove':
            const removeContact = await contactsService.removeContact(id);
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

invokeAction(argv);

