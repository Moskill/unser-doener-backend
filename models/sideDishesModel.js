import Sequelize from 'sequelize';
import { sequelize } from './index.js';

  const SideDishes = sequelize.define("sideDishes", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(2,2)
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  export default SideDishes;