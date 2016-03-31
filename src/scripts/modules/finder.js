/**
 * Finder module.
 * This module is responsible for doing some searching.
 */

'use strict';

var Jobbo = window.Jobbo || {};
Jobbo.Finder = (function(Notifier){

    /**
     * Defaults and config variables.
     * @type Object
     */
    var defaults = {
            api: 'http://jsonplaceholder.typicode.com/posts',
            search: {
                keywords: ['esse', 'dolorem']
            }
        },
        config = {},
        regexp = null;

    return {

        /**
         * Search for items which match with keywords.
         * @return function.
         */
        search: function(){

            regexp = regexp || new RegExp(config.search.keywords.join("|"));

            $.get(config.api, function(data){

                found = data.filter(function(post){
                    return (regexp.test(post.title));
                });

                if(found.length){
                    Notifier.notify({ message: "We found something for you!" });
                }

            });

            return this;

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
            Notifier.init();
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
})(Jobbo.Notifier);