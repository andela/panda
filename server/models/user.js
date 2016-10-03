module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(Models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
