require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./API/app/router');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors('*'));

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true
}));

app.use(router);

app.listen(process.env.PORT || 4000, () => {
    console.log('Server running on :', process.env.PORT);
});

