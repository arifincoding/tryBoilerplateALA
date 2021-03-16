const userModel = require("../models/users")
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

const insertUser = async (req)=>{
    userModel.create({username:req.body.username, password:req.body.password},(err,response)=>{
        if(err){
            return console.log(err)
        }
        return console.log(response)
    })
}

const getByUsername = async (user)=>{
    return userModel.findOne({username:user}).exec()
}

const deleteByUsername = async (user)=>{
    await userModel.deleteOne({username:user});
}

module.exports = {
    fetchUser,
    updateUser,
    insertUser,
    getByUsername,
    deleteByUsername
}