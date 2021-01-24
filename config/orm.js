const connection = require('../config/connection.js');

const orm = {

selectAll: function(cb) {
    connection.query('select * from burgers', function(err,results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            cb(results);
        }
    });
},
insertOne: function(newBurger,isDevoured, cb) {
       connection.query('insert into burgers (burger_name,devoured) values ??', [newBurger,isDevoured], function (err, result) {
          if (err) {
              return 'New burger could not be created.';
          } else {
              cb(result);
          }
       });
    },
updateOne: function(burgerId, isDevoured, cb) {
    connection.query('update burgers set devoured = ? where id = ?', [burgerId,isDevoured], function(err,result) {
        if (err) {
            return 'This burger could not be updated.';
        } else {
            cb(result);
        }
    });
}
}

module.exports = orm;