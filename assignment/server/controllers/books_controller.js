let books = [];

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = {
            id: id, title: title, author: author
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        // Initially tried to use findIndex for this
        // but index might not be equal to ID
        let updatedBook = null;
        books.forEach((book, i) => {
            if (book.id === Number(req.params.id))
                updatedBook = i;
        });
        books[updatedBook] = {
            id: books[updatedBook].id,
            title: req.body.title || books[updatedBook].title,
            author: req.body.author || books[updatedBook].author
        };
        res.status(200).send(books);
    },
    delete: (req, res) => {
        let findBook = null;
        books.forEach((book, i) => {
            if (book.id === Number(req.params.id))
                findBook = i;
        });
        books.splice(findBook, 1);
        res.status(200).send(books);
    }
};