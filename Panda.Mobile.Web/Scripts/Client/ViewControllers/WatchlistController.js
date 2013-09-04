(function ($, namespace) {
    'use strict';

    var watchlist = function () {
        var exports = {};

        exports.init = function () {
            var self = this;

            return self;
        };

        return exports;
    };

    namespace.Watchlist = new watchlist().init();

})(jQuery, window.Orchestrator);