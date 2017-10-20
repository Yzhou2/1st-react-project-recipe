var express = require('express');
var massive = require('massive');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
var config = require('./config')




app.use(cors());

app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: 'sdfwsieuosk'
}))
// app.use( express.static( `${__dirname}/../build` ) );
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

const connectionString = config.connectionString;
massive( connectionString ).then( db => {
  console.log("DB Connected");
  app.set('db', db)
  // db.initTables.initTables()
  // .then( response => {
  //   console.log('User table init'); })
}).catch(err=>console.log(err));

app.listen(8080, ()=> {
  console.log('server is running on 8080');
})
