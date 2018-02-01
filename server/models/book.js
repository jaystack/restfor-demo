module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.ENUM('science', 'poetry'), defaultValue: 'science', allowNull: false },
      sold: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      segments: [
        { segmentKey: 'science', label: 'science books', segmentField: 'category', segmentValue: 'science' },
        { segmentKey: 'poetry', label: 'poetry books', segmentField: 'category', segmentValue: 'poetry' }
      ],
      createdAt: false,
      updatedAt: false
    }
  );

  Book.associate = ({ Book, Author }) =>
    Book.belongsTo(Author, {
      onDelete: 'CASCADE',
      foreignKey: { name: 'authorId', allowNull: false },
      targetKey: 'id'
    });

  return Book;
};
