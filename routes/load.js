var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/:url', function(req, res, next) {

    var url = decodeURIComponent(req.params.url);

    manifesto.loadManifest(url).then(function(manifest) {

        manifest = manifesto.create(manifest);

        res.render('load', {
            label: manifest.getLabel()
        });

    });

});

module.exports = router;
