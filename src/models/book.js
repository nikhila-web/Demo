const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = Schema({
        title: String,
        author: String,
        summary:String
});
module.exports = Book = mongoose.model('book', BookSchema)
