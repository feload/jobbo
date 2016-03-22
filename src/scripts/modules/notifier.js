var Jobbo = window.Jobbo || {};

Jobbo.Notifier = (function(){

    var defaults = {
            type: 'basic',
            iconUrl: '../assets/gandalf.png',
            title: 'We have found something for you!',
            message: 'Hey! this is what we found...'
        },
        config = {};

    return {

        notify: function(data){
            chrome.notifications.create("Notification", config, function(a,b){
                console.log('callback',a,data);
            })
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