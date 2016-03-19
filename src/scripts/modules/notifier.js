var Jobbo = window.Jobbo || {};

Jobbo.Notifier = (function(){

    var defaults = {},
        config = {};

    return {

        notify: function(data){
            console.log('Notifier here... found something', data);
        },

        run: function(){
        },

        initDeps: function(){
        },

        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        init: function(_options){
            this.setUp(_options || {});
            this.initDeps();
        }

    }

})();