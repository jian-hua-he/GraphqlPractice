import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import hello from './hello';
import { todos } from './todo/query';
import { user } from './user/query';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: hello,
            todos: todos,
            user: user,
        },
    }),
});

export default schema;