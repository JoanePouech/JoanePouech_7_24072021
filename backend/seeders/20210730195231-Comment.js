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
    await queryInterface.bulkInsert('comments', [{
      articleId: 2,
      username: "User02",
      post: 'Christiani et celerari conpulsus ad scriptae tortis confessisque haec etiam'
    },{
      articleId: 2,
      username: "User04",
      post: 'Ea autem voluit cum haec'
    },{
      articleId: 2,
      username: "User01",
      post: 'Facinorum circulo terrena duplici alii'
    },{
      articleId: 2,
      username: "User01",
      post: 'Easque conscientia Censorius posse quasi spernentem curant id ut monstravit'
    },{
      articleId: 2,
      username: "User05",
      post: 'Cum culpa saepeque homines discessurum'
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
