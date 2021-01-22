const express = require("express");
const app = express();
const router = express.router;
const morgan = require('morgan')
const { db, syncDatabase } = require('./models');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended :  false}));

const userRouter = require('./routes/users');

app.use('/wiki', require('./routes/wiki'))

syncDatabase();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
