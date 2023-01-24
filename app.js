require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;
app.use(express.static('public'))

const indexRouter = require('./routes/index');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

