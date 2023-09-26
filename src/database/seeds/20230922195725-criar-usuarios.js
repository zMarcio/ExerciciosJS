'use strict';
const bcryptjs = require('bcryptjs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => await queryInterface.bulkInsert('users', [
    {
      nome: 'lucio51',
      email: 'lucio51@gmail.com',
      password_hash: bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: 'lucio11',
      email: 'lucio11@gmail.com',
      password_hash: bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'lucio12',
      email: 'lucio12@gmail.com',
      password_hash: bcryptjs.hash('123789', 8),
      created_at: new Date(),
      updated_at: new Date()
    }
  ], {}),
  down: async (queryInterface) => {}
};
