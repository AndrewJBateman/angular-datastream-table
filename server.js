// This server simulates an actual DB and routes to create, delete and get employees from a mock DB array object.

const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors');
const dotenv = require('dotenv').config();
const shortId = require('shortid');
let mocks = require('./mocks');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
        forceTLS: true
});

app.post('/employee', (req, res) => {
  // simulate actual db save with id (using shortId) and createdAt added
  const employee = {
    id: shortId.generate(),
    createdAt: new Date().toISOString(),
    ...req.body
  }
  mocks.push(employee) // like our db
  // trigger this update to pusher channel listeners
  pusher.trigger('employee', 'new', employee)
  res.send(employee)
});

app.delete('/employee/:id', (req, res) => {
  const employee = mocks.find(emp => emp.id === req.params.id)
  mocks = mocks.filter(emp => emp.id !== employee.id)
  pusher.trigger('employee', 'deleted', employee)
  res.send(employee)
});

app.get('/employee', (req, res) => {
  res.send(mocks)
});

app.listen(2000, () => console.log('Listening on port 2000'));
