import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const { MONGOURI, MONGOPASSWORD, MONGOUSERNAME } = process.env; 
const client = new MongoClient(MONGOURI, { auth: {username: MONGOUSERNAME, password: MONGOPASSWORD}} );

try {
    await client.connect();
    console.log("MongoDB connected!")
} catch (error) {
    console.error(error);
}

const db = client.db("Project13");
export default db;