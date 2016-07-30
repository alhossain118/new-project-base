'use strict';

require('dotenv').config();
const PORT        = process.env.PORT || 8000;

//set and require modules
const http        = require('http'); // build into node
const morgan      = require('morgan')
const express     = require('express')
const bodyParser  = require('body-parser')
const path        = require('path')
let app           = express();
let server        = http.createServer(app)


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {title: 'Fullstack Template'});
});

//ROUTES
app.use('/api', require('./routes/api'))

server.listen(PORT, err => {
  console.log(`\nServer listening on PORT ${PORT}`);
})
