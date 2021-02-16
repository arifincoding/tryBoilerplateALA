const { body } = require('express-validator');

const example = (exampleModel) => {
	return [
		body('username')
			.not().isEmpty()
			.isEmail(),
		body('password')
			.not()
			.isEmpty()
	]
}


module.exports = {
	// example,
}