import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './src/routes/auth.router.js';
import transferRouter from './src/routes/transfer.router.js';

dotenv.config();
export const { MONGOURI, MONGOPASSWORD, MONGOUSERNAME, PORT } = process.env;

const app = express();
app.use(cors(), json());

// Routes
app.use(authRouter);
app.use(transferRouter);


app.listen(PORT, () => {
    console.log("Running on port:", PORT);
})