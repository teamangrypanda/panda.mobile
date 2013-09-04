
(function ($, namespace) {
    'use strict';

    // Orchestrator main
    var orchestrator = function () {
        var exports = {};

        exports.$viewPort = $('#viewport');
        exports.$watchlistView = $('#container_watchlist');

        exports.init = function () {
            var self = this;

            //display loader then default page...


            exports.$viewPort.removeClass('hidden');
            exports.$watchlistView.addClass('selectedContainer');


            return self;
        };
        return exports;
    };

    namespace.Orchestrator = new orchestrator().init();

})(jQuery, window);

