'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
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
      card_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      card_number: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      card_date: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      card_cvv: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  },
};
