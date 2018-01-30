const express  = require('express');
const app      = express();                               // create our app w/ express
const mongoose = require('mongoose');                     // mongoose for mongodb        // log requests to the console (express4)
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const cors = require('cors');
const passport = require('passport');
const config = require('./config/database');
const users = require('./routes/users');
const path = require('path');
const port = 3000;
const plans = require('./routes/plans');



// Connect to the database
mongoose.connect(config.database);
//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to the database ' + config.database);
});
//Database Error
mongoose.connection.on('error', (err) => {
    console.log("Cannot connect in database");
    console.log('Database Error ' + err);
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


// Body Parser
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/plans', plans);

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');

});

app.listen(port, () =>{
    console.log('Server started on port ' + port);
});