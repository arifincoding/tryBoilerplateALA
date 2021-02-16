const jwt = require('jsonwebtoken');

module.exports = (res,username,data) => {

	const token = jwt.sign({username,data},process.env.jwtPrivateKey,{
		expiresIn:'7d'
	})
	
	return res.cookie('token',token,{
	    expires: new Date(Date.now() + 604800000),
	    secure: process.env.NODE_ENV == 'development' ? false : true,
	    httpOnly: true,
  	});
}