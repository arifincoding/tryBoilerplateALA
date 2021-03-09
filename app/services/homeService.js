const userModel = require("../models/users");

const fetchUser = async () => {
  return userModel.find();
};

const checkNumber = (number) => {
  if (number % 2 == 0) return true;

  return false;
};

module.exports = {
  fetchUser,
  checkNumber,
};
