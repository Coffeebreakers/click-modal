"use strict";

var jshint = require('jshint').JSHINT, 
    result = jshint('src/jquery.clickmodal.js');

if (result === false) {
    console.log(jshint.errors);
    console.log(jshint.data());
}