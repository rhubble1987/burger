const connection = require('connection');

const orm = {

selectAll: function() {
    connection.query('select * from burgers', function(err,results) {
        if (err) {
            return 'Data could not be returned.';
        } else {
            return results;
        }
    });
},
insertOne: function(newBurger,isDevoured) {
       connection.query('insert into burgers (burger_name,devoured) values ?,?', [newBurger,isDevoured], function (err) {
          if (err) {
              return 'New burger could not be created.';
          } else {
              return 'New burger created!';
          }
       });
    },
updateOne: function(burgerToUpdate, isDevoured, burgerId) {
    connection.query('update burgers set (burger_name,devoured) values ?,? where id = ?', [burgerToUpdate,isDevoured,burgerId], function(err) {
        if (err) {
            return 'This burger could not be updated.';
        } else {
            return 'Burger updated!';
        }
    });
}
}

module.exports = orm;