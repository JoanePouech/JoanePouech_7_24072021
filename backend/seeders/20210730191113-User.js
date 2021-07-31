'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      username: 'User01',
      email: 'user01@test.fr',
      password: 'mdp01' 
    },{
      username: 'User02',
      email: 'user02@test.fr',
      password: 'mdp02' 
    },{
      username: 'User03',
      email: 'user03@test.fr',
      password: 'mdp03' 
    },{
      username: 'User04',
      email: 'user04@test.fr',
      password: 'mdp04' 
    },{
      username: 'User05',
      email: 'user05@test.fr',
      password: 'mdp05' 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
