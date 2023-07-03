import express from "express"
import PublisherController from "../controllers/publishersController.js"

const router = express.Router()

router
  .get("/publishers", PublisherController.listAuthors)
  .get("/publishers/:id", PublisherController.listAuthorsById)
  .post("/publishers", PublisherController.registerAuthor)
  .put("/publishers/:id", PublisherController.updateAuthor)
  .delete("/publishers/:id", PublisherController.deleteAuthor)

export default router
