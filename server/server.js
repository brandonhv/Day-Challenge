const express = require('express');
const app = express();
const port = 8080;
// const path = require('path')

//parsing incoming json requests
// app.use(express.json());


app.get('/names', (req, res) => {

    res.json({"users": ["userOne", "userTwo", "userThree"]})
});


app.listen(port, () => {
    console.log(`Listening on port... ${port}`);
});
