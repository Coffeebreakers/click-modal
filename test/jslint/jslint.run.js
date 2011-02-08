var sys = require('sys'),
    fs = require('fs'),
    path = require('path'),
    jslint = require('./jslint'),
    dir = __dirname,
    jslint_options = {
      'passfail':false, // Stop on first error
      'white':true,   // Strict whitespace (enabled in "good parts")
      'browser':false,  // Assume a browser
      'devel':false,    // Assume console, alert,...
      'widget':false,   // Assume Yahoo widget
      'windows':false,  // Assume Windows
      'rhino':false,    // Assume Rhino
      'safe':false,   // Safe Subset
      'adsafe':false,   // ADsafe

      'debug':false,    // Tolerate debugger statements
      'evil':false,   // Tolerate eval() statements
      'laxbreak':false, // Tolerate sloppy linebreaking
      'forin':false,    // Tolerate unfiltered for in
      'sub':false,    // Tolerate inefficient subscripting
      'css':false,    // Tolerate CSS workarounds
      'cap':false,    // Tolerate HTML case
      'on':false,   // Tolerate HTML event handlers
      'fragment':false, // Tolerate HTML fragments
      'es5':false,    // Tolerate ES5 syntax

      'onevar':true,    // Allow one var statement per function (enabled in "good parts")
      'undef':true,   // Disallow undefined variables (enabled in "good parts")
      'nomen':true,   // Disallow dangling _ in identifiers (enabled in "good parts")
      'eqeqeq':true,    // Disallow == and != (enabled in "good parts")
      'plusplus':true,  // Disallow ++ and -- (enabled in "good parts")
      'bitwise':true,   // Disallow bitwise operators (enabled in "good parts")
      'regexp':true,    // Disallow insecure . and [^...] in /RegExp/ (enabled in "good parts")
      'newcap':true,   // Require Initial Caps for constructors (enabled in "good parts")
      'immed':true,   // Require parens around immediate invocations (enabled in "good parts")
      'strict':false,   // Require "use strict";
    };

function validate(filename, callback){
  fs.readFile(filename, 'utf8', function(err, file){
      sys.print('Checking ' + filename.replace(__dirname + '/', '') + '... ');
      callback( jslint.check( file.replace(/^\#!.*/,''), jslint_options ) );
      });
}

function status(ok){
  if(ok){
    sys.puts("all right");
  } else {
    var errors = jslint.check.errors;
    sys.puts(errors.length + ' errors found' + "\n");
    for(var i=0; i<errors.length; i+=1){
      if(errors[i]){
        sys.puts(' ' + errors[i].line + ':' + errors[i].character + '  : ' + errors[i].reason + ' >> ' + errors[i].evidence);
      }
    }
  }
  sys.puts("\n");
}

function walk(filename, callback){
  fs.stat(filename, function(err, stats){
    if(stats.isFile() && filename.match(/\.js$/)){
      callback(filename);
    } else if(stats.isDirectory()){
      fs.readdir(filename, function(err, files){
        for(var i=0; i<files.length; i+=1){
          walk(filename + '/' + files[i], callback);
        }
      });
    }
  });
}

if(process.argv.length > 2){
  dir = process.argv[2];
}

walk(dir, function(filename){
    validate(filename, status);
});
