/***********************
 * Adds hammerjs events
 ***********************/
define(function (require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var hammer = require('hammerjs');

  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  Backbone.View.prototype.delegateEvents = function(events){
    if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          if(this.$el.hammer) {
            this.$el.hammer().on(eventName, method);
          }else{
            this.$el.on(eventName, method);
          }
        } else {
          if(this.$el.hammer) {
            this.$el.hammer().on(eventName, selector, method);
          }else{
            this.$el.on(eventName, selector, method);
          }
        }
      }
      return this;
  };
 
});