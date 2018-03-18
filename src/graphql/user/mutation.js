import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import Email from 'scalar/email';

import userType from './type';

import User from 'db/entities/user';

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
            type: new GraphQLNonNull(Email),
            description: 'The user’s email',
        },
    },
    resolve: async function (context, args) {
        let user = new User({
            name: args.name,
            email: args.email,
        });

        await user.save();

        return user;
    },
};
