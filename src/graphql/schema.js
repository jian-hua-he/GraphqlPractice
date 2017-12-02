import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import hello from './hello';
import { todos } from './todo/query';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: hello,
            todos: todos,
        },
    }),
});

export default schema;