import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Transaction {
  id: number,
  fromUserId: number,
  toUserId: number,
  value: number,
  paymentMethod: string,
  cardName: string,
  cardNumber: number,
  cardDate: string,
  cardCvv: number,
  description: string,
  created_at: Date,
}

export interface TransactionCreationAttributes extends Optional<Transaction, 'id' | 'created_at'> { }

export interface TransactionInstance extends Model<Transaction, TransactionCreationAttributes>, Transaction { }

export const Transaction = sequelize.define<TransactionInstance, Transaction>('Transaction', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fromUserId: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  toUserId: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  value: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  paymentMethod: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cardName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cardNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  cardDate: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cardCvv: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE
  },
})