import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'
import bcryptjs from 'bcryptjs';

type CheckPasswordCallback = (err: Error | undefined, isSame: boolean) => void;

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: 'admin' | 'user'
  created_at: Date
}

export interface UserCreationAttibutes extends Optional<User, 'id' | 'created_at'> { }

export interface UserInstance extends Model<User, UserCreationAttibutes>,
  User {
  checkPassword: (password: string,
    callbackfn: CheckPasswordCallback) => void
}

export const User = sequelize.define<UserInstance, User>(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [['admin', 'user']],
      },
    },
    created_at: {
      type: DataTypes.DATE
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed('password')) {
          user.password = await bcryptjs.hash(user.password.toString())
        }
      }
    }
  }
)

User.prototype.checkPassword = function (
  password: string,
  callbackfn: (err: Error | undefined, isSame: boolean) => void
) {
  bcryptjs.compare(password, this.password, (err, isSame) => {
    if (err) {
      callbackfn(err, false)
    } else {
      callbackfn(err, isSame)
    }
  })
}