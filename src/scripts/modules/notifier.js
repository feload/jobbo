/**
 * Notifier module.
 * This module is responsible for showing notifications on your screen.
 */

var Jobbo = window.Jobbo || {};
Jobbo.Notifier = (function(){

    /**
     * Defaults and config variables.
     * @type Object
     */
    var defaults = {
            type: 'basic',
            iconUrl: '../assets/gandalf.png',
            title: 'We have found something for you!',
            message: 'Hey! this is what we found...'
        },
        config = {};

    return {

        /**
         * Launch a notification.
         * @param  object data | Data from finder module.
         * @return void.
         */
        notify: function(data){
            config = $.extend(config, data);
            chrome.notifications.create("Notification", config, function(notification, data){
            });
        },

        /**
         * Run module.
         * @return void.
         */
        run: function(){
        },

        /**
         * Dependencies intialization.
         * @return void.
         */
        initDeps: function(){
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
})();