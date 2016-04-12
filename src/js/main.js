var _ = require('underscore');
var $ = require('jquery')
// optional
var page = require('page');
var vivus = require('vivus');

var app = app || {};

app = (function() {
    'use strict';

    var _cache = {
        box: $('#box')
    },

    _init = function() {
        if(_cache.box.length > 0) {
            new vivus('box', { duration: 300, type: 'oneByOne' });
        }
        _addEvents();
    },

    _addEvents = function() {

    },

    _initRouter = function() {
    };

    return {
        init: _init
    };

})();

app.init();
