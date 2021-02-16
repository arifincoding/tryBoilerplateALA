module.exports = (req,res,next) => {

	req.name = "pug";

	console.log("hi im from middleware")

	return next();
}