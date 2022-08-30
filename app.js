const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('index.html');
    res.send('index.js');
    res.send('style.css');
});

app.listen(port, () => {
    console.log(`App successfully running at http://localhost:${port}`);
});