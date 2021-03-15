const userModel = require("../models/users")
const axios = require("axios").default
const jwt = require("../../app/helpers/genToken")  
require('dotenv').config()

const fetchUser = async () => {
  return userModel.find();
};

const updateUser = async (req) => {
  userModel.findOne({username:req.body.user},(err,response)=>{
    if(err){
      return console.log(err);
    }
    response.username = req.body.username;
    response.password = req.body.password;

    response.save( async (err,response)=>{
      if(err){
        return console.log(err)
      }
      await console.log(response)
    })
  })
}

const testRedis = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('helo')
    },5000)
  })
}

const testFetchData = async () => {  
  try{

    const MOCK_URL = process.env.MOCK_URL
    const { token } = jwt.genToken()
    
    const result = await axios.post(`${MOCK_URL}/mocks/v1/personals/coverage/check`, {}, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Access-Host": `${MOCK_URL}`,
        "Content-Type": "application/json",
        "accept": "application/json"
      }
    })

    return result.data;
  }catch(err){
    throw err
  }
}

const checkNumber = (number) => {
  if (number % 2 == 0) return true;

  return false;
};

const insertUser = async (req)=>{
  userModel.create({username:req.body.username, password:req.body.password},(err,response)=>{
    if(err){
      return console.log(err)
    }
    return console.log(response)
  })
}

module.exports = {
  fetchUser,
  checkNumber,
  testRedis,
  testFetchData,
  insertUser,
  updateUser
};
