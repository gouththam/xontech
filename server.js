const express = require('express');
const path = require('path');
const expressvalidator = require('express-validator');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 4446;
const db = require('./config/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'app/public')));

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


mongoose.connect(db.url, (err, database)=> {
  if(err) return console.log(err);


  require('./app/routes')(app, database);


  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
