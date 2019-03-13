var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// All routes
require('./backend/routes.js')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
  console.log("listening on port 8000");
})

