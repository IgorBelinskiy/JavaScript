// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      modal = require('./parts/modal.js'),
      slider = require('./parts/slider.js'),
      tabs = require('./parts/tabs.js'),
      timer = require('./parts/timer.js');


   calc();
   form();
   modal();
   slider();
   tabs();
   timer();
});

// if ('NodeList' in window && !NodeList.prototype.forEach) {
//    console.info('polyfill for IE11');
//    NodeList.prototype.forEach = function (callback, thisArg) {
//       thisArg = thisArg || window;
//       for (var i = 0; i < this.length; i++) {
//          callback.call(thisArg, this[i], i, this);
//       }
//    };
// }