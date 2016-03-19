var Jobbo = window.Jobbo || {};

Jobbo.Finder = (function(Notifier){

    var defaults = {},
        config = {};

    return {

        search: function(){
            console.log('searching...');

            if(Math.round(Math.random() * 10) % 2){
                console.log('something found');
                Notifier.notify({ rand: Math.random() });
            }else{
                console.log('nothing found :(');
            }

            return this;
        },

        run: function(){
        },

        initDeps: function(){
            Notifier.init();
        },

        setUp: function(_options){
            config = $.extend(defaults, _options);
        },

        init: function(_options){
            this.setUp(_options || {});
            this.initDeps();
        }

    }

})(Jobbo.Notifier);