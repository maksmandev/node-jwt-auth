const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(passport.initialize());
require('./passport')(passport);

mongoose.connect(config.db_host, {useNewUrlParser: true})
    .then(() => {console.log('Database is connected...')},
    err => {'Can not connect to database...'})  

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(authRoutes);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});