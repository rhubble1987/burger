const express = require('express');
const Burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req,res) {
    Burger.all(function(data) {
        const handlebarsObject = {
            id: data.id,
            burgerName: data.burger_name,
            devoured: data.devoured
        };
        res.render('index', handlebarsObject);
    });
});

router.post('/api/burgers', function(req,res) {
    Burger.insertOne(["burger_name","devoured"],[req.body.burger,req.body.devoured], function(err,result) {
        if (err) {
            res.sendStatus(500);
        } else {
        res.sendStatus(200);
        }
    });
});

router.put('/api/burgers/:id', function(req,res) {
    const burgerId = req.params.id;

    Burger.update(
        {
            burger: req.body.burger
        },
        {
            devoured: req.body.devoured
        },
        {
            burger: req.body.id
        },
        function(err,result) {
            if(result.changedRows === 0) {
                return res.sendStatus(404).end();
            } else if (err) {
                return res.sendStatus(500).end();
            } else {
                res.sendStatus(200).end();
            }
        }
    );
});

module.exports = router;