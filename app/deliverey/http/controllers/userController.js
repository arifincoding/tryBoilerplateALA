const userService = require("../../../services/userService");
const redisHelper = require("../../../helpers/redis")
const crypto = require("crypto-js")


const fetchUser = async (req, res) => {
//   tes db
    try{
        const key = 'getAllUser';
        const hash = crypto.MD5(key)
        
        const cache = await redisHelper.get(hash.toString());
        let result = null;

        if(!cache){
            result = await userService.fetchUser();
            redisHelper.set(hash.toString(),JSON.stringify(result));
        }else{
            result = JSON.parse(cache);
        }

        return res.json({
            status: 200,
            messages: "fetched",
            data: result,
        });
    }catch(err){
        err = new Error();

        res.status(500).json({
            status:500,
            message: "Error",
            data:err
        })
    }
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