define(function(require) {

	"use strict";

	// Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

	var stateEvents = {};

	_.extend(stateEvents, Backbone.Events);

	return stateEvents;

});