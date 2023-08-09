import { Sequelize } from "sequelize"
import * as env from "env-var"

const DATABASE_URL = env.get("DATABASE_URL").required().asString()

export const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    underscored: true
  }
})