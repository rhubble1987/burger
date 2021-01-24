const orm = require('../config/orm.js');

const Burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(newBurger, isDevoured, cb) {
        orm.insertOne(newBurger, isDevoured, function(res) {
            cb(res);
        });
    },
    update: function(burgerId, isDevoured, cb) {
        orm.updateOne(burgerId, isDevoured, function(res) {
            cb(res);
        });
    }
}

module.exports = Burger;