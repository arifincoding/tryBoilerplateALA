const model = require("../models");

const fetchUser = async (req, res) => {
  //tes db
  const result = await model.users.findAll();

  res.json({
    status: 200,
    messages: "fetched",
    data: [],
  });
};

const index = (req, res) => {
  //tes view engine
  const number = req.params.number;

  if (number % 2 == 0) {
    res.status(200).json({
      status: 200,
      messages: "OK",
      data: [],
    });
  } else {
    res.status(201).json({
      status: 201,
      messages: "CREATED",
      data: [],
    });
  }

  //for rendering pug
  // res.status(200).render("index", {
  //   name: msg,
  // });
};

module.exports = {
  fetchUser,
  index,
};
