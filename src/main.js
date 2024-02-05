import express from 'express';
import color from 'colors';
import dotenv from 'dotenv';
import path from 'path';
const app = express();

const __dirname = path.resolve();

dotenv.config({ path: `${__dirname}/config/.env` });

app.get('/', (req, res) => {
    res.send('home');
});

let PORT = process.env.PORT;
let ENVIRONMENT = process.env.ENVIRONMENT;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server created successfully and run on ${ENVIRONMENT} with Port No: ${PORT}`.green.underline);
    } else {
        console.log('not created'.bgRed);
    }
});