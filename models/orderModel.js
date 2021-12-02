import Sequelize from 'sequelize';
import { sequelize } from './index.js';

  const Order = sequelize.define("orders", {
    menus: {
      type: Sequelize.STRING
    },
    sideDishes: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.DECIMAL(6,2)
    },
    invoiceId: {
      type: Sequelize.STRING
    },
  },
  {
    timestamps: false,
    updatedAt: false
  });

  export default Order;