const express = require("express");
var path = require('path');
const app = express();
const PORT = 3000;

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('./routes/index'))

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
