import Sequelize from 'sequelize';
import { sequelize } from './index.js';

  const Users = sequelize.define("users", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
    house_no: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  export default Users;