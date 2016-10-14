var express = require('express');
var app = express();
var users = require('./users.js')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(jsonParser)

app.get('/user', function (req, res) {
  res.send(users)
})

app.get('/user/:id', function (req, res) {
  console.log(req.params.id)
  var user = users.find(item => item.id === parseInt(req.params.id))
  res.send(user)
  //res.send(morkaroo[req.params.id - 1])
})

app.post('/user', function (req, res) {
  users.push(req.body)
  res.send(req.body)
})

app.put('/user/:id', function (req, res) {
  console.log(req.params.id)
  var index = users.findIndex(users => users.id === parseInt(req.params.id))
  users[index] = req.body
  res.send(users[index])
})

app.delete('/user/:id', function (req, res) {
  var index = users.findIndex(users => users.id === parseInt(req.params.id))
  users.splice(index, 1)
  res.send("ลบแล้ว")
})

app.get('/', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 0</h2>
      `);
});

app.get('/hello1', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 1</h2>
      `);
});

app.get('/hello2', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 2</h2>
      `);
});

app.get('/hello3', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 3</h2>
      `);
});

app.get('/hello4', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 4</h2>
      `);
});

app.get('/hello5', function (req, res) {
  res.send(`
      <a href="/">Root</a>
      <a href="/hello1">page1</a>
      <a href="/hello2">page2</a>
      <a href="/hello3">page3</a>
      <a href="/hello4">page4</a>
      <a href="/hello5">page5</a>
      <br><h2>Page 5</h2>
      `);
});


app.listen(3000, function () {
  console.log('Example appp listening on port 3000!!!');
});
