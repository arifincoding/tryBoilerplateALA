const userModel = require("../models/users")
require('dotenv').config()

const fetchUser = async () => {
    return userModel.find();
};

const updateUser = async (user,userData) => {
    let updateUser = await userModel.findOneAndUpdate({username:user},userData,{new:true});
    return updateUser;
}

const insertUser = async (userData)=>{
    let newUser = await userData.save()
    return newUser;
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