import publishers from "../models/Publisher.js"

class PublisherController {
  static listPublishers = async (req, res) => {
    try {
      const publishersResult = await publishers.find()
      res.status(200).json(publishersResult)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static listPublishersById = async (req, res) => {
    const id = req.params.id

    try {
      const publisherResult = await publishers.findById(id)
      res.status(200).send(publishersResult)
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Can't find this publisher's ID.` })
    }
  }

  static registerPublisher = (req, res) => {
    let publisher = new publisher(req.body)

    publisher
      .save()
      .then(res.status(201).send(publisher.toJSON()))
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} - error when registering the publisher.`,
        })
      })
  }

  static updatePublisher = async (req, res) => {
    const id = req.params.id
    try {
      await publishers.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: "Publisher successfully updated." })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  static deletePublisher = async (req, res) => {
    const id = req.params.id

    try {
      await publishers.findByIdAndDelete(id)
      res.status(200).send({ message: "Publisher successfully deleted" })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }
}

export default PublisherController
