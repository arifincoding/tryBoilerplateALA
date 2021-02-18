const model = require("../models");

const fetchUser = async () => {
  return model.users.findAll();
};

const checkNumber = (number) => {
  if (number % 2 == 0) return true;

  return false;
};

module.exports = {
  fetchUser,
  checkNumber,
};
