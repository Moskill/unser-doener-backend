import  { db } from '../dbConfig.js';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect,
  pool: {
    max: db.pool.max,
    min: db.pool.min,
    acquire: db.pool.acquire,
    idle: db.pool.idle
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
