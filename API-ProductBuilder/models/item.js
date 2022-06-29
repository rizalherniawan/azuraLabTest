'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  }
  item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "product name must be filled"
        },
        len: {
          args: [2,50],
          msg: 'no longer than 50 chars and less than 2 chars'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "category must be filled"
        },
        len: {
          args: [2,50],
          msg: 'no longer than 50 chars and less than 2 chars'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "price must be filled"
        },
        isInt: {
          args: true,
          msg: 'decimal is not allowed'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "description must be filled"
        },
        len: {
          args: [2,200],
          msg: 'no longer than 200 chars and less than 2 chars'
        }
      }
    },
    stocks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "stock must be filled"
        },
        min: 0,
        isInt: {
          args: true,
          msg: 'decimal is not allowed'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'item',
    tableName: 'items'
  });
  return item;
};
