define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/footer/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        tagName: 'nav',

        className: 'bar bar-tab',

        events: {

        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        }

    });

});