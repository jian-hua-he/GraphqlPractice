import {
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

let todoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo graphql type',
    fields: {
        title: {
            description: 'Todo’s name',
            type: GraphQLString,
        },
        description: {
            description: 'Todo’s description',
            type: GraphQLString,
        },
    },
});

export default todoType;