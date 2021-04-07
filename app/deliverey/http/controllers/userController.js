const userService = require("../../../services/userService");
const redisHelper = require("../../../helpers/redis");
const crypto = require("crypto-js");
const {validationResult} = require('express-validator');
const userHelper = require('../../../helpers/userHelper');

const fetchUser = async (req, res) => {
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

    try{
    const errors = await validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    let dataUser = userHelper.buildUser(req);
    let result = await userService.insertUser(dataUser);

    return res.json({
        status: 200,
        messages: "created",
        data:result
    });
    }catch(err){
        err = new Error();

        res.status(500).json({
        status:500,
        message: "Error",
        data:err
        })
    }
}

const updateUser = async (req, res) =>{
    
    try{
        const errors = await validationResult(req)
        
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        let user = req.body.user;
        let userData = userHelper.updateUser(req);
        let result = await userService.updateUser(user,userData);

        return res.json({
            status:200,
            messages: "updated",
            data:result
        });
    }catch(err){
        err = new Error();

        res.status(500).json({
            status:500,
            message: "Error",
            data:err
        })
    }
}

const getByUsername = async (req, res)=>{
    
    try{
        const user = req.params.username;
        const hash = crypto.MD5("user"+user);
        const cache = await redisHelper.get(hash.toString());
        let result = null;

        if(!cache){
            result = await userService.getByUsername(user);
            if(result){
                redisHelper.set(hash.toString(),JSON.stringify(result));
            }
        }else{
            result = JSON.parse(cache);
        }

        return res.json({
            status:200,
            messages: "fetched",
            data: result
        })
    }catch(err){
        err = new Error();

        res.status(500).json({
            status:500,
            message:"Error",
            data:err
        })
    }
}

const deleteByUsername = async (req,res)=>{
    
    try{
        const user = req.params.username
        await userService.deleteByUsername(user)

        return res.json({
            status:200,
            messages:"deleted"
        })
    }catch(err){
        err = new Error();

        res.status(500).json({
            status:500,
            message: "Error",
            data:err
        })
    }
}

module.exports = {
    fetchUser,
    insertUser,
    updateUser,
    getByUsername,
    deleteByUsername
}