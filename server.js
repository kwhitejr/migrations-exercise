var faker = require('faker');
var express = require('express');
var db = require('./models');

var app = express();

// creating users
app.post('/users', function (req, res) {
  db.User.create({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    bio: faker.lorem.sentence(),
    email: faker.internet.email()
  }).then(function (user) {
    res.json(user);
  });
});

// pulls users from db
app.get('/users', function (req, res) {
  // select all from User
  db.User.find({}).then(function (users) {
    res.json(users);
  });
});

app.listen(8080, function () {
  db.sequelize.sync();
  console.log('listening...');
});