define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/favorites/tpl/index.html');
    var template = _.template(tpl);

    var $body = $('body');
	
	return Backbone.View.extend({
		className: 'favorites',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());

			// Apend as its own view
			//$body.append('<nav class="bar bar-standard bar-header-secondary"><div class="segmented-control"><a class="control-item active">Scores</a><a class="control-item">News</a><a class="control-item">Now</a></div></nav>');
			
			return this;
		}
	});

});