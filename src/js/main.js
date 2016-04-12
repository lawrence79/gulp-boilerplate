var _ = require('underscore');
var $ = require('jquery')
var page = require('page');
var vivus = require('vivus');

var app = app || {};

app = (function() {
    'use strict';

    var _cache = {},

    _init = function() {
        new vivus('box', { duration: 300, type: 'oneByOne' });
        _initRouter();
        _addEvents();
    },

    _addEvents = function() {
        $('.example-link').click(function(e) {
            e.preventDefault();
        });
    },

    _initRouter = function() {
        page('/', _index);
        page('*', _notfound);
        page();
    },

    _notfound = function() {
        console.log('not found');
    },

    _example = function() {
        console.log('on example page');
    },

    _index = function() {
        console.log('router loaded');
    };

    return {
        init: _init
    };

})();

app.init();
