const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Middleware to execute before kickoff any action
app.use(bodyParser.json());


app.get('/', (req, resp) => {

    resp.status(200).send("Hello welcome Rajamani");
});

app.listen(process.env.PORT || 5000);

module.exports = app;