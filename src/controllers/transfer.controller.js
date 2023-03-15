import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

import db from '../../db.js';

const getTransfers = async (req, res) => {
    const id = res.locals.id;

    try {
        const transfers = await db.collection("transfers").find({ userId: id }).toArray();
        return res.status(200).send({transfers});

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

export const deleteTransfer = async (req, res) => {
    const transferId = req.body.transferId;
    const userId = res.locals.id;

    try {
        const transfer = await db.collection("transfers").findOne({ id: transferId });
        if(transfer.userId != userId) return res.sendStatus(401);
        const transferDelete = await db.collection("transfer").deleteOne({ id: transferId });
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export const putTransfer = async (req, res) => {
    console.log('deltr');
    const transferId = req.body.transferId;
    const { value, type, description } = res.locals.transfer;

    try {
        const transfer = await db.collection("transfers").findOne({ id: transferId });
        console.log('todelt', transfer)
        if(transfer.userId != userId) return res.sendStatus(401);
        const transferUpdate = await db.collection("transfer").updateOne({ id: transferId }, { value, type, description });
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export { getTransfers, addTransfer };