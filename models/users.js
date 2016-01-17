'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};