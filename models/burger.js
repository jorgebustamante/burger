var orm = require('../config/orm.js');


var burger = {
    // Select all burger table entries
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    // The variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: function(cols, condition, cb) {
      orm.updateOne('burgers', cols, condition, function(res) {
        cb(res);
      });
    }
  };
  
module.exports = burger;
