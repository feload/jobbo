/**
 * Jobbo.Alarms
 */

var Jobbo = window.Jobbo || {};

Jobbo.Alarm = (function(){

    var defaults = {
            name: "JobboAlarm",
            lap: {
                delayInMinutes: 0.1,
                periodInMinutes: 0.2
            },
            onAlarm: function(){ }
        },
        config = {};

    return {

        addListener: function(){
            chrome.alarms.onAlarm.addListener(config.onAlarm);
        },

        createAlarm: function(){
            chrome.alarms.create(config.name, config.lap);
            return this;
        },

        run: function(){
            this.createAlarm().addListener();
            return this;
        },

        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        init: function(_options){
            this.setUp(_options || {});
            return this;
        }

    }

})();