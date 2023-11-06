const BookService = require("../services/book.service");

module.exports = class User {
  static async create(req, res, next) {
   const createbook = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
      };
      const findBook = await BookService.get({ title: req.body.title });
      if (findBook) {
        return res
          .status(409)
          .json({ error: `${createbook.title} Already exist`, success: false });
      }
      const book = await BookService.create(createbook);
      return res.status(200).json({
        message: "BOOK_ADDED",
        book
      });
    
  }

  static async findBooks(req, res, next) {
    try {
      const findbooks = await BookService.getAll();
        res.json({
          status: "success",
          message: "books found!!!",
          books: findbooks,
        });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async findbook(req, res, next) {
    try {
      const findbook = await BookService.get({ _id: req.params.id });
      if (findbook) {
        res.json({
          status: "success",
          message: "book found!!!",
          book: findbook,
        });
      } else {
        res.json({ status: "error", message: "book not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async updateBook(req, res, next) {
    try {
      const findBook = await BookService.get({ _id: req.params.id });
      if (findBook) {
        const updatebook = {
          title: req.body.title,
          author: req.body.author,
          summary: req.body.summary,
        };
        BookService.update({ _id: req.params.id }, updatebook)
          .then((data) => {
            res.json({
              status: "success",
              message: "book details updated",
              data,
            });
          })
          .catch((error) => {
            res.status(500).json({ error: "error in updating book details" });
          });
      } else {
        res.json({ status: "error", message: "book not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const findBook = await BookService.get({ _id: req.params.id });
      if (findBook) {
        BookService.delete({ _id: req.params.id }, findBook)
          .then((data) => {
            res.json({
              status: "success",
              message: "book deleted",
              data,
            });
          })
          .catch((error) => {
            res.status(500).json({ error: "error in deleting book" });
          });
      } else {
        res.json({ status: "error", message: "book not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
