const userModel = require("../models/users")

const buildUser = (req)=>{
    const usermodel = new userModel({
        username:req.body.username,
        password:req.body.password
    });
    return usermodel;
}

const updateUser = (req)=>{
    return {
        username:req.body.username,
        password:req.body.password
    }
}

module.exports = {buildUser,updateUser}