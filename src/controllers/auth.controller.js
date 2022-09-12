import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

import db from '../../db.js';


const login = async (req, res) => {
    const user = res.locals.user;

    try {
        const dbUser = await db.collection("users").findOne( { email: user.email });
        console.log(user.password, dbUser)
        const isCorrect = bcrypt.compareSync(user.password, dbUser.password);
        if(!isCorrect) return res.status(401).send("Invalid password");

        const token = uuid();
        const session = await db.collection("sessions").insertOne({ userId: dbUser._id, token});
        console.log(session);
        return res.status(200).send({ id: dbUser._id, token });
    
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal issue, please try again later");        
    }

}

const signup = async (req, res) => {
    const { name, email, password, confirmation } = res.locals.form;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    console.log({ name, email, password, confirmation })

    try {

        const user = await db.collection("users").insertOne({name, email, password: encryptedPassword });
        console.log(user);
        return res.status(201).send("Registered successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal issue, please try again later.");
    }
}

export { signup, login };