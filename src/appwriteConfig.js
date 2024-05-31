import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '66554809003179cf9acf';
export const COLLECTION_ID_TABLES = '6657a65a0039b27ac2fe';
export const COLLECTION_ID_USERS = '66569d4300037cb35aa2';
export const DATABASE_ID = '66569d2f002bf6ab0316';

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66554809003179cf9acf');


export const databases = new Databases(client);
export const account = new Account(client);

export default client;