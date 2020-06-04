const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.port || 4000;
const path = require('path');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// IMPORT ROUTERS HERE
const usersRouter = require('./api/routes/users');
const businessesRouter = require('./api/routes/businesses');


// SERVE APP
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/ping', function (req, res) {
  return res.send('pong');
});

// MOUNT ROUTERS HERE
app.use('/users', usersRouter);
app.use('/businesses', businessesRouter);

// START SERVER
app.listen(process.env.PORT || 4000, ()=> {
  console.log(`Listening on ${port}!`)
});