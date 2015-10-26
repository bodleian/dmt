var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Manifesto'
    });

});

module.exports = router;
