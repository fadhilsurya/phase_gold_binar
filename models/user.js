'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    full_name: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    email: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    address: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    phone_number: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gender: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password: {
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    is_active: {
      types: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      types: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: false
    },
    updatedAt: {
      types: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      types: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};