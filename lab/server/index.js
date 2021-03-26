const express = require ('express');
const port = 3000;
const app = express();
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.listen(port, function(err) {
    if (err) console.log("Server error: " + err)
    console.log('Server running on port ' + port);
});

app.get('/', function(req, res) {
    res.send(`Server is running on port: ${port}`);
});

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);