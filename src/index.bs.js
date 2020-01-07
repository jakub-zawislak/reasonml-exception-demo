'use strict';

var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var number;

try {
  number = Caml_format.caml_float_of_string("1,");
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  if (exn[0] === Caml_builtin_exceptions.failure) {
    number = 0.0;
  } else {
    throw exn;
  }
}

console.log(number);

exports.number = number;
/*  Not a pure module */
