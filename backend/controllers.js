const { Task } = require('./models.js');


module.exports = {
  getAllTasks: (req, res) => {
    Task.find({})
      .then((data) => {
        res.json(data)
      })
      .catch((err) => console.log("Error: ", err))

  },
  getOneTaskById: (req, res) => {
    Task.findById(req.params.id)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => console.log("Error: ", err))
  },
  createNewTask: (req, res) => {
    Task.create(req.body)
      .then((data) => {

        res.json(data)
      })
      .catch((err) => console.log("Error: ", err))
  },
  updateOneTask: (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((data) => {
        res.json(data)
      })
      .catch((err) => console.log("Error: ", err))
  },
  deleteOneTask: (req, res) => {
    Task.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.json(data)
      })
      .catch((err) => console.log("Error: ", err))
  }

}
