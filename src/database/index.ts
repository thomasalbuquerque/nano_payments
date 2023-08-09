import { Sequelize } from "sequelize"
import dotenv from "dotenv";
dotenv.config();
// const a = process.env.DATABASE_URL
const DATABASE_URL = 'postgres://nano_payments_admin:nano_payments_admin_password@localhost:5432/nano_payments_db'

export const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    underscored: true
  }
})