const orm = require('../config/orm.js');

const Burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(newBurger, cb) {
        orm.insertOne(newBurger, function(res) {
            cb(res);
        });
    },
    update: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res) {
            cb(res);
        });
    }
}

module.exports = Burger;