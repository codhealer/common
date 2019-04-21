"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var camel2Dash = function camel2Dash(string) {
  return string.replace(/([A-Z]{1,1})/g, '-$1').replace(/^-/, '').toLocaleLowerCase();
};

var _default = camel2Dash;
exports.default = _default;