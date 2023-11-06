const Book = require("../models/book");

module.exports = class BookService{
    static async getAll(){
        try {
            const book = await  Book.find();
            return book;
        } catch (error) {
            console.log(`Could not fetch books ${error}`)
        }
    }

    static async create(data){
        try {
            return await new Book(data).save();
        } catch (error) {
            console.log(error);
        } 

    }
    static async get(query){
        try {
            const book =  await Book.findOne(query);
            return book;
        } catch (error) {
            console.log(`Book not found. ${error}`)
        }
    }

    static async update(query, updateBook){
            try {
                return await Book.findOneAndUpdate(query, updateBook, { new: true })
            } catch (error) {
                console.log(`Could not update Book details ${error}` );

        }
    }

    static async delete(query){
        try {
            const deletedResponse = await Book.findByIdAndRemove(query);
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete Book ${error}`);
        }

    }
}