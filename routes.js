const  express =  require("express");
const router = express.Router();

const Book = require("./src/controllers/book.controller");


router.post("/create", Book.create);
router.get("/Books", Book.findBooks);
router.get("/Book/:id", Book.findbook);
router.put("/update/:id", Book.updateBook);
router.delete("/delete/:id", Book.deleteBook);

module.exports =  router;