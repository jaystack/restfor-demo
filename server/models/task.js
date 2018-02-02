module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      title: DataTypes.STRING,
      checked: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
      taskType: DataTypes.ENUM('primary', 'secondary'),
      deadline: DataTypes.DATE
    },
    {
      customOptions: {
        hidden: false,
        defaultOrder: [['title', 'ASC']],
        grid: {
          visibleFields: ['id', 'title', 'checked', 'taskType', 'deadline', 'UserId', 'isExpired']
        }
      },
      segments: [
        { segmentKey: 'primary', label: 'primary tasks', segmentField: 'taskType', segmentValue: 'primary' },
        { segmentKey: 'secondary', label: 'secondary tasks', segmentField: 'taskType', segmentValue: 'secondary' },
        { segmentKey: 'smallids', label: 'tasks with ids below 5', where: { id: { lt: 5 } } }
      ]
    }
  );

  Task.associate = ({ Task, User }) =>
    Task.belongsTo(User, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false }
    });

  return Task;
};
