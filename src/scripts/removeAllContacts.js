import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    if (contacts.length !== 0) {
      contacts = [];
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
      console.log(`Successful operation. Removed all contacts.`);
    }
  } catch (err) {
    console.log(err);
  }
};

await removeAllContacts();
