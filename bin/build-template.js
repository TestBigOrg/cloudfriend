#!/usr/bin/env node

/* eslint-disable no-console */

var cloudfriend = require('..');
var argv = require('minimist')(process.argv.slice(2));
var templatePath = argv._[0];
cloudfriend.build(templatePath, argv)
  .then(function(template) {
    console.log(JSON.stringify(template, null, 4));
  });
