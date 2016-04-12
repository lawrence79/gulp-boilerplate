var _ = require('underscore');
var $ = require('jquery')

var vivus = require('vivus');
var Grapnel = require('grapnel');
var catchLinks = require('catch-links');

var app = app || {};

app = (function() {
    'use strict';

    var _cache = {},
    router = new Grapnel({ pushState: true }),
    _init = function() {
        _initRouter();
        console.log('app loaded');
        new vivus('box', { duration: 300, type: 'oneByOne' });
        _addEvents();
    },
    _addEvents = function() {
        $('.example-link').click(function(e) {
            router.navigate('/examples');
            e.preventDefault();
        });
    },
    _initRouter = function() {

        router.get('/', _index);
        router.get('/examples', _example);
        // wildcard route - matches all
        router.get('/*', function(req, e) {
          $(window).scrollTop(0);

          // if the wildcard route is the only one that matches, it's a 404
          // just route to the homepage for now
          if (!e.parent()) {
            router.navigate('/');
          }
        });

        // Handle all internal link clicks with Grapnel and ignore external URLs
        catchLinks(window, function(href) {
            router.navigate(href);
        });
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
