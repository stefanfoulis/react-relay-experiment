/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class User extends Object {}
class Widget extends Object {}
class App extends Object {}

// Mock data
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';

var apps = [1,2,3,4,5,6].map((num, i) => {
  var app = new App();
  var identifier = 'id-' + num;
  var name = 'my-app-' + num;
  app.id = identifier;
  app.name = name;
  app.isDeployed = true;
  app.prettyName = 'My App ' + num;
  return app;
});


module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getApp: (id) => apps.find(w => w.id === id),
  getApps: () => apps,
  User,
  Widget,
  App,
};
