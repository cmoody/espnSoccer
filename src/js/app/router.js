define(function(require) {

  "use strict";

  // Libs
  var $ = require('jquery');
  var Backbone = require('backbone');
  var ViewHandler = require('libs/viewHandler');
  var stateEvents = require('libs/stateEvents');

  // Main Container
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Views
  var HeaderView = require('app/header/header');
  var FooterView = require('app/footer/footer');

  var HomeView = require('app/home/home');
  var FavoritesView = require('app/favorites/favorites');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'index',
      '/': 'index',
      'favorites': 'favorites'
    },

    initialize: function() {
      this.addHeader(); // If Auth needed move into viewHandler
      this.addFooter();
    },

    addHeader: function() {
      var headerView = new HeaderView();

      $body
        .prepend(headerView.$el);
    },

    addFooter: function() {
      var footerView = new FooterView();

      $body
        .prepend(footerView.$el);
    },

    index: function() {
      var homeView = new HomeView();

      stateEvents.trigger("update:title", "ESPN FC"); // Maybe move into ViewHandler?

      ViewHandler.setCurrent(homeView);
    },

    favorites: function() {
      var favoritesView = new FavoritesView();

      stateEvents.trigger("update:title", "Favorites");

      ViewHandler.setCurrent(favoritesView);
    }

  });

});