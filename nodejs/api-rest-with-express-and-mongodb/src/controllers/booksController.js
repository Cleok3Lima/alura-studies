import books from "../models/Book.js"

class BookController {
  static listBooks = async (req, res) => {
    try {
      const booksResult = await books
        .find()
        .populate("author")
        .populate("publisher")
      res.status(200).json(booksResult)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static listBooksById = async (req, res) => {
    const id = req.params.id

    try {
      const bookResult = await books.findById(id).populate("author", "name")
      res.status(200).send(bookResult)
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Can't find this book ID.` })
    }
  }

  static registerBook = (req, res) => {
    let book = new books(req.body)

    book
      .save()
      .then(res.status(201).send(book.toJSON()))
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} - error when registering the book.`,
        })
      })
  }

  static updateBook = async (req, res) => {
    const id = req.params.id
    try {
      await books.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: "Book successfully updated." })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  static deleteBook = async (req, res) => {
    const id = req.params.id

    try {
      await books.findByIdAndDelete(id)
      res.status(200).send({ message: "Book successfully deleted" })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  static listBookByPublisher = async (req, res) => {
    const publisher = req.query.publisher

    try {
      await books.find({ publisher: publisher }, {})
      res.status(200).send(books)
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
    // books.find({ publisher: publisher }, {}, (err, books) => {
    //   res.status(200).send(books)
    // })
  }
}

export default BookController
