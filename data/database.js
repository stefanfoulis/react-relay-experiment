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
var widgets = ['What\'s-it', 'Who\'s-it', 'How\'s-it'].map((name, i) => {
  var widget = new Widget();
  widget.name = name;
  widget.id = `${i}`;
  return widget;
});

var apps = [1,2,3,4,5,6].map((num, i) => {
  var app = new App();
  var identifier = 'id-' + num;
  var name = 'my-app-' + num;
  app.id = identifier;
  app.name = name;
  return app;
});

//function* range(start, end) {
//    for (let i = start; i <= end; i++) {
//        yield i;
//    }
//}
//var apps = {};
//for (let i of range(1,9 )) {
//  var app = new App();
//  var identifier = 'id-' + i;
//  var name = 'my-app-' + i;
//  app.id = identifier;
//  app.name = name;
//  apps[identifier] = app;
//}


module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getWidget: (id) => widgets.find(w => w.id === id),
  getWidgets: () => widgets,
  getApp: (id) => apps.find(w => w.id === id),
  getApps: () => apps,
  User,
  Widget,
  App,
};
