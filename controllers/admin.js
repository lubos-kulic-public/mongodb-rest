var mongo = require("mongodb");
var dbconnection = require("../commands/helpers/dbconnection");
var sys = require("sys");

exports.register = function(app) {
	app.del('/:db', function(req, res, next) {
		dbconnection.open(req.params.db, app.set('dbconnection'), function(err, db) {
            db.collections(function(err, collections){
                collections.forEach(function(item){ item.drop(); });
                app.renderResponse(res, err, true);
            });
            /*
			db.dropDatabase(function(err) {
                app.renderResponse(res, err, true);
				//db.close();
            });
            */
		});
	});
};
