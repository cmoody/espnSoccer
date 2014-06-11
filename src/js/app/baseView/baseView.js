define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	
	var BaseView = function(options) {
		this.onEnter();

		Backbone.View.apply(this, [options]);
	};

	_.extend(BaseView.prototype, Backbone.View.prototype, {
		
		onEnter: function() {
			console.log("Entered");
		}

	});

	BaseView.extend = Backbone.View.extend;

	return BaseView
});