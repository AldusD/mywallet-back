import joi from 'joi';

import db from '../../db.js';

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmation: joi.string().required()
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

const signupMiddleware = async (req, res, next) => {
    const { name, email, password, confirmation } = req.body;

    // checking 422
    const isValid = signupSchema.validate({ name, email, password, confirmation }, { abortEarly: true });
    if(isValid.error) res.status(422).send(isValid.error.message);
    if(password !== confirmation )res.status(422).send("Password fields must have the same values");

    // checking 409
    try {
        const conflict = await db.collection("users").findOne({ email: email });
        if( conflict ) {
            res.status(409).send("Email already in use");}
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal issue, please try again later");
    }

    res.locals.form = { name, email, password, confirmation };
    next();
}

const loginMiddleware = async (req, res, next) => {
    const { password, email } = req.body;
    
    const isValid = loginSchema.validate({ password, email }, { abortEarly: true });
    if(isValid.error) res.status(422).send(isValid.error.message)

    try {
        const realUser = await db.collection("users").findOne({ email });
        if(!realUser) res.status(422).send("This email is not registered");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal issue, please try again later");
    }

    res.locals.user =  { email, password };
    next();
}

export { signupMiddleware, loginMiddleware };