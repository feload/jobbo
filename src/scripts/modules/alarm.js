var Jobbo = window.Jobbo || {};

Jobbo.Alarm = (function(Finder){

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

        addListener: function(){
            chrome.alarms.onAlarm.addListener(Finder.search);
            return this;
        },

        createAlarm: function(){
            chrome.alarms.create(config.name, config.lap);
            return this;
        },

        run: function(){
            this.createAlarm()
                .addListener();
        },

        initDeps: function(){
            Finder.init();
        },

        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        init: function(_options){
            this.setUp(_options || {});
            this.initDeps();
        }

    }

})(Jobbo.Finder);