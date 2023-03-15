import joi from 'joi'
import { ObjectId } from 'mongodb';

import db from '../../db.js';

const transferSchema = joi.object({
    value: joi.number().required(),
    type: joi.string().valid("receive", "pay").required(),
    description: joi.string().required()
});

const verifyTokenMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const id = req.params.id;

    try {
        const session = await db.collection("sessions").findOne({ token });
        if(!session) return res.status(401).send("Desconnected.");

        const validconnection = session.userId.equals(id);
        if(!validconnection) return res.status(401).send("Desconnected");

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }

    res.locals.id = { id };
    next();
}

const addTransferMiddleware = (req, res, next) => {
    const { value, type, description } = req.body;
    
    const isValid = transferSchema.validate({ value, type, description }, { abortEarly: true } );
    if(isValid.error) return res.status(422).send(isValid.error.message);

    res.locals.transfer = { value, type, description };
    next();
}

export { verifyTokenMiddleware, addTransferMiddleware };