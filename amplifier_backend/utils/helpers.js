exports = {}

const jwt = require("jwt");

// 7th
exports.getToken = async (email,user)=>{
 // assume code is written.
 const token = jwt.sign({identifier:user._id});
 return token;
};
module.exports = exports;