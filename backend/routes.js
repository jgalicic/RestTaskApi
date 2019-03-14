const controller = require('./controllers');

module.exports = app => {

  app
    .get('/api/tasks', controller.getAllTasks)
    .get('/api/tasks/:id', controller.getOneTaskById)
    .post('/api/tasks', controller.createNewTask)
    .put('/api/tasks/:id', controller.updateOneTask)
    .delete('/api/tasks/:id', controller.deleteOneTask)

}
