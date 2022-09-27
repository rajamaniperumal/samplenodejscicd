const express = require('express');
const app = express();

app.get('/', (req, resp) => {

    resp.status(200).send("Hello welcome Rajamani");
});

app.listen(process.env.PORT || 5000);

module.exports = app;