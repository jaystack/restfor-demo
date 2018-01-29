module.exports = ({ config, models }, router) => {
  router.post('/actions/addTaskForUsers', async (req, res) => {
    const tasks = req.body.users.map(UserId => ({
      title: req.body.title,
      checked: false,
      taskType: req.body.taskType,
      deadline: req.body.deadline,
      UserId
    }));
    res.json(await models.Task.bulkCreate(tasks));
  });
};
