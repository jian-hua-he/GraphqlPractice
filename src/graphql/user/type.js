import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

let userType = new GraphQLObjectType({
    name: 'User',
    description: 'User graphql Type',
    fields: {
        id: {
            description: 'User’s unique id',
            type: GraphQLID,
        },
        name: {
            description: 'User’s name',
            type: GraphQLString,
        },
        email: {
            description: 'User’s email',
            type: GraphQLString,
        },
    },
});

export default userType;
