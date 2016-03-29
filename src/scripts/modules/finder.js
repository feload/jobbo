var Jobbo = window.Jobbo || {};

Jobbo.Finder = (function(Notifier){

    var defaults = {
            api: 'http://jsonplaceholder.typicode.com/posts',
            search: {
                keywords: ['esse', 'dolorem']
            }
        },
        config = {},
        regexp = null;

    return {

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