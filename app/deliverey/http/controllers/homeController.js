const homeService = require("../../../services/homeService");
const redisHelper = require("../../../helpers/redis");
const md5 = require("md5")

const fetchUser = async (req, res) => {
  //tes db
  const result = await homeService.fetchUser();

  return res.json({
    status: 200,
    messages: "fetched",
    data: result,
  });
};

const testRedis = async (req, res) => {
  //tes redis
  const key = req.params.key
  const hash = md5(key)

  const chache = await redisHelper.get(hash)
  let result = null

  if(!chache){
    result = await homeService.testRedis()
    await redisHelper.set(hash, result)
  }else{
    result = chache
  }

  return res.json({
    status: 200,
    messages: result,
    data: []
  })
}

const index = (req, res) => {
  //tes view engine
  const number = req.params.number;

  const isEven = homeService.checkNumber(number);

  if (isEven) {
    return res.status(200).json({
      status: 200,
      messages: "OK",
      data: [],
    });
  } else {
    return res.status(201).json({
      status: 201,
      messages: "CREATED",
      data: [],
    });
  }
};

module.exports = {
  fetchUser,
  testRedis,
  index,  
};
