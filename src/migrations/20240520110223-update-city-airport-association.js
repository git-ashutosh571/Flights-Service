'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type:'FOREIGN KEY',
      name:'city_fkey_constraint',
      fields:['cityId'],
      references:{
        table:'Cities',
        field: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fkey_constraint');
  }
};

/**
 * Query to check if constraints has been applied or not
 * select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME = 'airports' AND CONSTRAINT_SCHEMA ='flights';
 */
