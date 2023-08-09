'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      from_user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      to_user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      value: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      payment_method: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      payment_date: {
        type: Sequelize.DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payables');
  },
};
