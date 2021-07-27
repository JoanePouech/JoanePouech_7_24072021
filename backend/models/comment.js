'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMENT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(model.Article, {
        foreignKey: {allowNull: false}
      })
    }
  };
  COMMENT.init({
    username: DataTypes.STRING,
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'COMMENT',
  });
  return COMMENT;
};