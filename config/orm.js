var connection = require ('./connection.js');


var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??" + ";";
        connection.query(queryString, [table], function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});

    },

    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO ??(??), VALUES (?)";


        connection.query(queryString, [table], function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});

    },

    updateOne: function(table, cols, vals, condition, cb){
        var queryString = "UPDATE ??(??), VALUES (?)"

        connection.query(queryString, [table], function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
    },


}


module.exports = orm;
