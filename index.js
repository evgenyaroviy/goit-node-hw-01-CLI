const argv = require('yargs').argv;
const {addContact, listContacts, getContactById, removeContact} = require("./contacts")

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const allContacts = await listContacts();
        console.table(allContacts)
      break;

    case 'get':
      const receivedСontact = await getContactById(id)
      console.log(receivedСontact)
      break;

    case 'add':
      const addedContact = await addContact(name, email, phone)
      console.log(addedContact)
      break;

    case 'remove':
      const removedContact = await removeContact(id)
      console.log(removedContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);