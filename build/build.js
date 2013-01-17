/*jshint node: true, indent: 4*/

"use strict";

var compressor = require('node-minify');

new compressor.minify({
    type: 'yui-css',
    fileIn: 'src/jquery.clickmodal.css',
    fileOut: 'minified/jquery.clickmodal.min.css',
    callback: function (err) {
        console.log(err);
    }
});

// Using YUI Compressor for JS
new compressor.minify({
    type: 'yui-js',
    fileIn: 'src/jquery.clickmodal.js',
    fileOut: 'minified/jquery.clickmodal.min.js',
    callback: function (err) {
        console.log(err);
    }
});