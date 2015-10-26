# Digital Manuscript Toolkit - online manuscript editor
https://bodleian.github.com/dmt

## Description

DMT online manuscript editor is a web-based tool to view, edit and format digital manuscript manifests created in JSON format. This tool is part of a larger toolkit using IIIF: http://iiif.io, an image server and many other tools. More updates on this tool will be published later on the [DMT project blog](http://dmt.bodleian.ox.ac.uk) and on [my blog](http://monicams.com/blog)

##Setup

    npm install
    bower install
    gulp serve

    Point browser to http://localhost:3000/ and load a IIIF compliant manifest from any URL.

## Note

At the moment I'm working with [Manifesto](https://github.com/UniversalViewer/manifesto) and the [Handlebards demo](https://github.com/edsilv/manifesto-handlebars-demo) for a test on how to load manifests and display online selecting specific fields.

The previous attempt code was based on the [JSON Editor](https://github.com/josdejong/jsoneditor) - folder preserved temporarily at [json-editor-test](https://github.com/bodleian/dmt/tree/master/json-editor-test) - and you can access a [temporarily live demo](http://monicams.com/labs/dmt/examples/dmt_sample.html) to see it working. However this will only serve as reference from now (26/10/2015) on.

More updates coming soon.

