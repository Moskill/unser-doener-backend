import Sequelize from 'sequelize';
import { sequelize } from './index.js';

  const MenuSideDishes = sequelize.define("menuSideDishes", {
    m_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    sd_id: {
      type: Sequelize.INTEGER
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  export default MenuSideDishes;