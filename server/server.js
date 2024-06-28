const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

//parsing incoming json requests
app.use(express.json());


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(port, () => {
    console.log(`Listening on port... ${port}`);
});
