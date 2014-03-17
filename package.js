Package.describe({
  summary: "PNotify packaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files(['jquery.pnotify.default.css', 'jquery.pnotify.js'], 'client');
});
