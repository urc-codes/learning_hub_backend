const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_title: {
        type: String,
    },
    author_name: {
        type: String,
    },
    book_image_id: {
        type: String,
    },
    book_category: {
        type: String,
    },
    book_url: {
        type: String,
    },
}, {timestamps: true});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;