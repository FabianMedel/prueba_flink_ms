const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes');

const {json, urlencoded} = express;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false}));

const corsOptions = {
    origin: '*',
    optionsSuccesStatus: 200
}

app.use(cors(corsOptions));
app.use(router);

app.use('/', (req,res) => {
    res.send("This is the microservicio v.1.0.0");
});

const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});