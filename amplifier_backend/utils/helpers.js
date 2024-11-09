exports = {}

const jwt = require("jsonwebtoken");

// 7th
exports.getToken = async (email,user)=>{
 // assume code is written.
 const token = jwt.sign(
    {identifier:user._id},
    "thisKeyIsSupposedToBeSecret"
);
 return token;
};
module.exports = exports;