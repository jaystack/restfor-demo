module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );

  Author.associate = ({ Author, Book }) => Author.hasMany(Book, { foreignKey: { name: 'authorId' } });

  return Author;
};
