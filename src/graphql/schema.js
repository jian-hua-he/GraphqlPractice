import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import hello from './hello';
import { todos } from './todo/query';
import { user } from './user/query';
import { createUser } from './user/mutation';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: hello,
            todos: todos,
            user: user,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            createUser: createUser,
        },
    }),
});

export default schema;