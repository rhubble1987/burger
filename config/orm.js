const connection = require('../config/connection.js');

const orm = {

selectAll: function(cb) {
    connection.query('select * from burgers', function(err,results) {
        if (err) {
            return 'Data could not be returned.';
        }
            cb(results);
        
    });
},
insertOne: function(newBurger, cb) {
       connection.query('insert into burgers (burger_name,devoured) values (?, 0)', [newBurger], function (err, result) {
          if (err) {
              return 'New burger could not be created.';
          } else {
              cb(result);
          }
       });
    },
updateOne: function(burgerId, cb) {
    connection.query('update burgers set devoured = 1 where id = ?', [burgerId], function(err,result) {
        if (err) {
            return 'This burger could not be updated.';
        } else {
            cb(result);
        }
    });
}
}

module.exports = orm;