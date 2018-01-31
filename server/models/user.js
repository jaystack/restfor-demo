module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    powerlvl: DataTypes.INTEGER
  });

  User.associate = ({ User, Task }) => User.hasMany(Task);

  return User;
};
