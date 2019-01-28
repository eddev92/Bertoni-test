const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
// app.use(cors())

// Rutas

app.get('/get/items', (req, res) => {
    res.status(200).send({
        message: "HOLA :D"
    });
});

app.post('/save/item', (req, res) => {
    console.log(req.param)
    res.status(200).send({
        message: "HOLA :D"
    });
});

app.listen(8000, () => {
    console.log('server running 8000!')
});
