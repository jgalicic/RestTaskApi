var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_db', { useNewUrlParser: true });

var Task_schema = new mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: {} })
mongoose.model('Task_schema', Task_schema);
var Task = mongoose.model('Task_schema')

module.exports = { Task }