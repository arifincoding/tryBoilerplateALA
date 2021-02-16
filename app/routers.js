module.exports = (app) => {
	app.use('/',require('./controllers/home'));
	// app.use('{url}',{controller Name/file})
}
