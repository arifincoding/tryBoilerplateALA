const {check} = require('express-validator');

module.exports =[
        check('username','Name cannot empty').not().isEmpty(),
        check('password','password must be at least 8 characters').isLength({min:8})
        ]