import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    console.log(`Successful operation. Added 1 contact.`);
  } catch (err) {
    console.log(err);
  }
};

await addOneContact();
