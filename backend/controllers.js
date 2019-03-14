const { Task } = require('./models.js');

module.exports = {

  getAllTasks: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneTaskById: (req, res) => {
    const ID = req.params.id;
    Task.findOne({_id:ID}) 
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  
  createNewTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  updateOneTask: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Task.findOneAndUpdate({ _id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  deleteOneTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id:ID})
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  }

}
