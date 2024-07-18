const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('qualidade', 'root', 'root', {
  host: 'mysql',
  dialect: 'mysql'
});

const User = sequelize.define('User', {  // Singular form
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email already in use'
    },
    validate: {
      isEmail: {
        msg: 'Must be a valid email address'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [6, 255],
        msg: 'Password must be between 6 and 255 characters'
      }
    }
  }
}, {
  timestamps: true  // Enable automatic timestamps
});

module.exports = User;
