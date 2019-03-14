const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_db', {useNewUrlParser:true});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task };