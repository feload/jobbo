/**
 * Alarm module.
 * This module is used for executing tasks at a certain interval.
 */

var Jobbo = window.Jobbo || {};
Jobbo.Alarm = (function(Finder){

    /**
     * Defaults and config variables.
     * @type Object
     */
    var defaults = {
            name: "JobboAlarm",
            lap: {
                periodInMinutes: 0.1,
                delayInMinutes: 0.1,
            },
            onAlarm: function(){ }
        },
        config = {};

    return {

        /**
         * Add listener for launch the alarm.
         * @return function.
         */
        addListener: function(){
            chrome.alarms.onAlarm.addListener(Finder.search);
            return this;
        },

        /**
         * Create a new alarm.
         * @return function.
         */
        createAlarm: function(){
            chrome.alarms.create(config.name, config.lap);
            return this;
        },

        /**
         * Run module.
         * @return void.
         */
        run: function(){
            this.createAlarm()
                .addListener();
        },

        /**
         * Dependencies intialization.
         * @return void.
         */
        initDeps: function(){
            Finder.init();
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
        }

    }

/**
 * Dependencies.
 */
})(Jobbo.Finder);