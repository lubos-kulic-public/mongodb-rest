var mongo = require("mongodb");
var dereference = require("./helpers/dereference");
var dbconnection = require("./helpers/dbconnection");
var jsonUtils = require("./helpers/jsonUtils");
var sys = require("sys");

/*
    target = { connection: { host, port }, db, collection } || { connection: [ {host, port} ], db, collection }
    spec = {}
    options = { safe: true }
    next = function(err, mongoDbResult)
*/
module.exports = function(target,spec,options,next){
    jsonUtils.deepDecode(spec);

	dbconnection.open(target.db, target.connection, function(err,db) {
		db.collection(target.collection, function(err, collection) {

            if(!options)
                options = { safe: true };
            if(!options.safe)
                options.safe = true;

			collection.remove(spec, options, function(err, docs) {
				next(err, docs);
				//db.close();
			});
		});
	});
}
