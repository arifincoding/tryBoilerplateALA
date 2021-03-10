const userModel = require("../models/users");

const fetchUser = async () => {
  return userModel.find();
};

const testRedis = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('helo')
    },5000)
  })
}

const checkNumber = (number) => {
  if (number % 2 == 0) return true;

  return false;
};

module.exports = {
  fetchUser,
  checkNumber,
  testRedis,
};
