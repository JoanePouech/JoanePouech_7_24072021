'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('COMMENTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idARTICLES: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id'
        }
      },
      username: {
        type: Sequelize.STRING
      },
      post: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('COMMENTs');
  }
};