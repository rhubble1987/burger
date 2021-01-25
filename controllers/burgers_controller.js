const express = require('express');
const Burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req,res) {
    Burger.all(function(data) {
        console.log(data);
        const handlebarsObject = {
            burgers: data
        };
        res.render('index', handlebarsObject);
    });
});

router.post('/api/burgers', function(req,res) {
    Burger.create(req.body.name, function() {
        res.sendStatus(200).end();
    });
});

router.put('/api/burgers/:id', function(req,res) {
    Burger.update(req.body.id, function() {
        res.sendStatus(200).end();
        }
    );
});

module.exports = router;