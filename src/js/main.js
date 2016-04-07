var _ = require('underscore');
var $ = require('jquery')(window);
var vivus = require('vivus');

var app = app || {};
var app = (function () {
        'use strict';

        function _init() {
            console.log('app loaded');
           new vivus('box',{duration: 300, type: 'oneByOne'});
        };

       return {
            init: _init
        };

    })();

app.init();