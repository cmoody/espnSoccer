define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var stateEvents = require('libs/stateEvents');
	//var BaseView = require('app/baseView/baseView');

	// Template
    var tpl = require('text!app/home/tpl/home.html');
    var template = _.template(tpl);

    var $body = $('body');
	
	return Backbone.View.extend({
	//return BaseView.extend({
		className: 'home',

		events: {
			'tap .scores-item': 'scores', // These will load collection for each section if collection doesnt exist
			'tap .news-item': 'news',     // If on that section pull to refresh reloads collection and runs its on update this.render
			'tap .now-item': 'now'
		},

		initialize: function() {
			stateEvents.trigger("navigation:home");

			this.render();
		},

		render: function() {
			this.$el.html(template());

			return this;
		},

		// Refactor class selctors
		// Also needs to update bar-header-secondary active
		scores: function() {
			this.$el
				.removeClass('slide-second')
				.removeClass('slide-third')
				.addClass('slide-first');
		},

		news: function() {
			this.$el
				.removeClass('slide-first')
				.removeClass('slide-third')
				.addClass('slide-second');
		},

		now: function() {
			this.$el
				.removeClass('slide-second')
				.removeClass('slide-first')
				.addClass('slide-third');
		}
	});

});

// $('.card-list')