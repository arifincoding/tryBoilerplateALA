const homeService = require("../../../services/userService");
const crypto = require("crypto-js")

const fetchUser = async (req, res) => {
  //tes db
    const result = await homeService.fetchUser();

    return res.json({
        status: 200,
        messages: "fetched",
        data: result,
    });
};

const insertUser = async (req, res) =>{

    const result = await homeService.insertUser(req);

    return res.json({
        status: 200,
        messages: "created"
    });

}
const updateUser = async (req, res) =>{

    const result = await homeService.updateUser(req);

    return res.json({
        status:200,
        messages: "updated"
    });
}

module.exports = {
    fetchUser,
    insertUser,
    updateUser
}