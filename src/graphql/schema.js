import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import hello from './hello';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: hello,
        },
    }),
});

export default schema;