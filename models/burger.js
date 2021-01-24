const orm = require('../config/orm.js');

const Burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    create: function(newBurger, isDevoured, cb) {
        orm.insertOne('burgers', newBurger, isDevoured, function(res) {
            cb(res);
        });
    },
    update: function(burgerToBeUpdated, isDevoured, burgerId, cb) {
        orm.updateOne('burgers', burgerToBeUpdated, isDevoured, burgerId, function(res) {
            cb(res);
        });
    }
}

module.exports = Burger;