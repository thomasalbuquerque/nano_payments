'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      last_name: {  // Added field
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        validate: {
          isIn: [['admin', 'user']],
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {  // Added field
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
