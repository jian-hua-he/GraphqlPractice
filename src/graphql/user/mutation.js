import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import userType from './type';

export const createUser = {
    name: 'CreateUser',
    description: 'Add a single user',
    type: userType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The user’s name',
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The user’s email',
        },
    },
    resolve: function (context, args) {
        let user = { id: 4 };

        user.name = args.name;
        user.email = args.email;

        return user;
    },
};