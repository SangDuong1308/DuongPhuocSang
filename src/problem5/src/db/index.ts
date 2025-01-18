import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: console.log
})

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch(error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export default sequelize;