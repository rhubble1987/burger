const express = require('express');
const Burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req,res) {
    Burger.all(function(data) {
        const handlebarsObject = {
            burgers: data
        };
        res.render('index', handlebarsObject);
    });
});

router.post('/api/burgers', function(req,res) {
    Burger.create(req.body.burgerName, req.body.devoured, function(err,result) {
        if (err) {
            res.sendStatus(500);
        } else {
        res.sendStatus(200);
        }
    });
});

router.put('/api/burgers/:id', function(req,res) {
    Burger.update(req.body.id, req.body.devoured, function(err,result) {
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