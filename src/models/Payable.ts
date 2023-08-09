import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Payable {
  id: number,
  fromUserId: number,
  toUserId: number,
  value: number,
  paymentMethod: string,
  status: string,
  paymentDate: Date,
  created_at: Date,
}

export interface PayableCreationAttributes extends Optional<Payable, 'id' | 'created_at'> { }

export interface PayableInstance extends Model<Payable, PayableCreationAttributes>, Payable { }

export const Payable = sequelize.define<PayableInstance, Payable>('Payable', {
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
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  paymentDate: {
    type: DataTypes.DATE
  },
  created_at: {
    type: DataTypes.DATE
  },
})