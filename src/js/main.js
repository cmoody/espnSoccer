require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
        'text' : 'vendor/requirejs-text/text',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {}
});

require([
	'app/router',
	'libs/delegateEvents'
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

});