import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import hello from 'graphql/hello';
import { todos } from 'graphql/todo/query';
import { user } from 'graphql/user/query';
import { createUser } from 'graphql/user/mutation';
import { createTodo } from 'graphql/todo/mutation';

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
            createTodo: createTodo,
        },
    }),
});

export default schema;