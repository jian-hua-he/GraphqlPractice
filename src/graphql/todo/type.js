import {
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType
} from 'graphql';

let todoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo graphql type',
    fields: {
        id: {
            description: 'Todo’s unique id',
            type: GraphQLID,
        },
        title: {
            description: 'Todo’s name',
            type: GraphQLString,
        },
        description: {
            description: 'Todo’s description',
            type: GraphQLString,
        },
        checked: {
            description: 'Check todo is completed',
            type: GraphQLBoolean,
        },
    },
});

export default todoType;