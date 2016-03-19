var Jobbo = window.Jobbo || {};
Jobbo.App = (function(Alarm){

    var defaults = {},
        config = {};

    return {

        run: function(){
            Alarm.run();
        },

        initDeps: function(){
            Alarm.init();
        },

        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        init: function(_options){
            this.setUp(_options || {});
            this.initDeps();
            return this;
        }

    }

})(Jobbo.Alarm);