"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var dash2Camel = function dash2Camel(string) {
  return string.replace(/[\-]{1,1}([a-z]{1,1})/g, function () {
    return arguments[1].toLocaleUpperCase();
  });
};

var _default = dash2Camel;
exports.default = _default;