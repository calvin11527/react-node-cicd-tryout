const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT;
const FRONTEND_PATH = process.env.FRONTEND_PATH;

const app = express();
console.log(path.join(__dirname, FRONTEND_PATH))
app.use(express.static(path.join(__dirname, FRONTEND_PATH)));

app.get('/names', (req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
})