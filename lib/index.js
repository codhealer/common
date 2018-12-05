'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');



module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify,
  'default': 'RFC3986',
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return value;
    }
  },
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};