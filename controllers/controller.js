const express = require('express');

const router = express.Router();

const burger =  require('./../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        }
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', (req, res) =>  {
    burger.create(['burger_name'],
    [req.body.burger_name], (result) => {
        res.json({ id: res.insertId})
    });
});

module.exports = router;