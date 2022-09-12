import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

import db from '../../db.js';

const getTransfers = async (req, res) => {
    const id = res.locals.id;

    try {
        const transfers = await db.collection("transfers").find({ userId: id }).toArray();
        return res.status(200).send(transfers);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

const addTransfer = async (req, res) => {
    const { value, type, description } = res.locals.transfer;
    const id = res.locals.id;
    const date = dayjs().format('MM/DD');

    try {
        const transfer = await db.collection("transfers").insertOne({
            value, type, description, userId: id, date
        });
        console.log(transfer);
        return res.sendStatus(201);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export { getTransfers, addTransfer };