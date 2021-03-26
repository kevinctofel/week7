const products = require('../products.json');

const getProduct= (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id));
    if(item) 
    res.send(item)
    else
    res.send(`Product not found.`)
};

module.exports = getProduct;