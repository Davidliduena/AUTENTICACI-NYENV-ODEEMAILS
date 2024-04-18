const EmailCode = require("./EmailCode");
const User = require("./User");

//emailcode -> userId
EmailCode.belongsTo(User)
User.hasMany(EmailCode)