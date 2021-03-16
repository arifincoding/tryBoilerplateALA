const userService = require("../../../services/userService");
const crypto = require("crypto-js")

const fetchUser = async (req, res) => {
  //tes db
    const result = await userService.fetchUser();

    return res.json({
        status: 200,
        messages: "fetched",
        data: result,
    });
};

const insertUser = async (req, res) =>{

    const result = await userService.insertUser(req);

    return res.json({
        status: 200,
        messages: "created"
    });

}
const updateUser = async (req, res) =>{

    const result = await userService.updateUser(req);

    return res.json({
        status:200,
        messages: "updated"
    });
}

const getByUsername = async (req, res)=>{
    const user = req.params.username
    const result = await userService.getByUsername(user);

    return res.json({
        status:200,
        messages: "fetched",
        data: result
    })
}

module.exports = {
    fetchUser,
    insertUser,
    updateUser,
    getByUsername
}