import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import userType from './type';
import userEntity from 'db/entities/user';

export const user = {
    name: 'UserQuery',
    description: 'Query a single user',
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The user id',
        },
    },
    resolve: async function (context, args) {
        let userId = new Types.ObjectId(args.id);
        let result = await userEntity.findById(userId);

        return result;
    },
};