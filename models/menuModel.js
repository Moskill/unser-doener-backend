import Sequelize from 'sequelize';
import { sequelize } from './index.js';

  const Menu = sequelize.define("menu", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(6,2)
    },
    imgUrl: {
      type: Sequelize.STRING
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  export default Menu;