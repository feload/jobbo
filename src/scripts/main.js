/**
 * Jobbo v0.1
 */

var Jobbo = window.Jobbo || {};

Jobbo.App = (function($, Alarm){

    var defaults = {
            alarm: {}
        },
        config = {};

    return {

        run: function(){
            Alarm.init(config.alarm).run();
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

})($, Jobbo.Alarm);

document.addEventListener('DOMContentLoaded', function() {
    Jobbo.App.init({
        alarm: {
            onAlarm: function(){
            }
        }
    }).run();
});