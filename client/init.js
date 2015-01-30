// Manually initialize the router into a nested div
$(window).on("polymer-ready", function() {
return Session.set("polymer-ready", true);
});

Meteor.startup(function() {
$("body").append("<div fit layout vertical iron-router></div>");
return Tracker.autorun(function() {
  if (Session.get("polymer-ready")) {
  Router.insert({
      el: "[iron-router]"
    });
    return Router.start();
}
});
});