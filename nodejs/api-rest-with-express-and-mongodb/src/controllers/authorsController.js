import authors from "../models/Author.js"

class AuthorController {
  static listAuthors = async (req, res) => {
    try {
      const authorsResult = await authors.find()
      res.status(200).json(authorsResult)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static listAuthorsById = async (req, res) => {
    const id = req.params.id

    try {
      const authorResult = await authors.findById(id)
      res.status(200).send(authorResult)
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Can't find this author ID.` })
    }
  }

  static registerAuthor = (req, res) => {
    let author = new authors(req.body)

    author
      .save()
      .then(res.status(201).send(author.toJSON()))
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} - error when registering the author.`,
        })
      })
  }

  static updateAuthor = async (req, res) => {
    const id = req.params.id
    try {
      await authors.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: "Author successfully updated." })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  static deleteAuthor = async (req, res) => {
    const id = req.params.id

    try {
      await authors.findByIdAndDelete(id)
      res.status(200).send({ message: "Author successfully deleted" })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }
}

export default AuthorController
