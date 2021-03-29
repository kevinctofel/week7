const express = require('express');
const PORT = 4000;
const bc = require('./controllers/books_controller.js');
const app = express();
const serverMessage = () => {
    console.log('server listening on port 4000');
}

app.use(express.json());
app.use(express.static( __dirname + '/../build'));

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

app.listen(PORT, serverMessage());
