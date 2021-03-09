const homeService = require("../../../services/homeService");

const fetchUser = async (req, res) => {
  //tes db
  const result = await homeService.fetchUser();

  return res.json({
    status: 200,
    messages: "fetched",
    data: result,
  });
};

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
  index,
};
