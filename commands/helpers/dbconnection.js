var mongo = require("mongodb");
var sys = require("sys");

db = null;

exports.open = function(dbname, config, callback) {
    if(db) {
        callback(null, db);
    } else {
        var target;

        if(Array.isArray(config)) {
            var servers = new Array();
            for(var i = 0; i<config.length; i++)
                servers.push(new mongo.Server(config[i].host, config[i].port));
            target = new mongo.ServerCluster(servers);
        } else {
            target = new mongo.Server(config.host, config.port, {'auto_reconnect':true});
        }
        
        db = new mongo.Db(dbname, target);
        db.open(callback);
    }
};
