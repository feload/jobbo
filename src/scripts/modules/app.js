/**
 * Main application script.
 */

'use strict';

var Jobbo = window.Jobbo || {};
Jobbo.App = (function(Alarm){

    /**
     * Defaults and config variables.
     * @type Object
     */
    var defaults = {},
        config = {};

    return {

        /**
         * Run module.
         * @return void.
         */
        run: function(){
            Alarm.run();
        },

        /**
         * Dependencies intialization.
         * @return void.
         */
        initDeps: function(){
            Alarm.init();
        },

        /**
         * Generate configuration based on options.
         * @param object _options
         */
        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        /**
         * Module initialization.
         * @param  object _options
         * @return function
         */
        init: function(_options){
            this.setUp(_options || {});
            this.initDeps();
            return this;
        }

    }

/**
 * Dependencies.
 */
})(Jobbo.Alarm);