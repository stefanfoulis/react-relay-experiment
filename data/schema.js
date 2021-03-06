/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
  User,
  Widget,
  getUser,
  getViewer,

  App,
  getApp,
  getApps,
} from './database';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'App') {
      return getApp(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof App) {
      return appType;
    } else {
      return null;
    }
  }
);

/**
 * Define your own types here
 */

var userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    apps: {
      type: appConnection,
      description: 'A person\'s collection of apps',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getApps(), args),
    },
    app: {
      type: appType,
      description: 'a specific app by id',
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => getApp(args['id']),
    },
  }),
  interfaces: [nodeInterface],
});

var appType = new GraphQLObjectType({
  name: 'App',
  description: 'An Application',
  fields: () => ({
    id: globalIdField('App'),
    slug: {
      type: GraphQLString,
      description: 'The slug of the app for usage in urls',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the app',
    },
    prettyName: {
      type: GraphQLString,
      description: 'The pretty name of the app',
    },
    isDeployed: {
      type: GraphQLBoolean,
      description: 'is it deployed?',
    },
  }),
  interfaces: [nodeInterface],
});


/**
 * Define your own connection types here
 */

var {connectionType: appConnection} =
  connectionDefinitions({name: 'App', nodeType: appType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: userType,
      resolve: () => getViewer(),
    },
  }),
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});
