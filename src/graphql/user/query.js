import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import userType from './type';
import userList from '../../db/fake/user.json';

export let user = {
    name: 'UserQuery',
    description: 'Query a single user',
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The user id',
        },
    },
    resolve: function (context, args) {
        let result = userList.find((user) => {
            return user.id == args.id;
        });

        return result;
    },
};