var config = {};

//config.server = {};
//config.server.port = 9889;

config.db = {
	filename: PATH_TO_NEDB_DATABASE_FILE,
	autoload: true
};
//config.db.filename = "/home/ad/feathers-books/data/books.db";
config.path = SERVICE_ENDPOINT


// Interface
module.exports = config;
