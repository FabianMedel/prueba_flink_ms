const express = require('express');
const cors = require('cors');
const path = require('path');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT || 8080;

const corsOptions = {
    origin: '*',
    optionsSuccesStatus: 200
}

app.use(cors(corsOptions));

app.use('/', (req,res) => {
    res.send("this is the microservicio v.1.0.0");
});

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});