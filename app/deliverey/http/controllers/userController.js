const userService = require("../../../services/userService");
const crypto = require("crypto-js")
const redisHelper = require("../../../helpers/redis")

const fetchUser = async (req, res) => {
//   tes db
    const cache = await redisHelper.get('getAllUser');
    let result = null;

    if(!cache){
        result = await userService.fetchUser();
        redisHelper.set('getAllUser',JSON.stringify(result));
    }else{
        result = JSON.parse(cache);
    }

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

const deleteByUsername = async (req,res)=>{
    const user = req.params.username
    const result = await userService.deleteByUsername(user)

    return res.json({
        status:200,
        messages:"deleted"
    })
}

module.exports = {
    fetchUser,
    insertUser,
    updateUser,
    getByUsername,
    deleteByUsername
}