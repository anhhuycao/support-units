module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'unit',
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
      date: { type: DataTypes.INTEGER(11), allowNull: false },
      value: { type: DataTypes.INTEGER(11), allowNull: false },
      type: { type: DataTypes.INTEGER(11), allowNull: false },
    },
    { tableName: 'unit', timestamps: false }
  );
};
