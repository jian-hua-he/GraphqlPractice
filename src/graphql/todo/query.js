import {
    GraphQLID,
    GraphQLList
} from 'graphql';
import { Types } from 'mongoose';

import todoType from './type';
import todoEntity from '../../db/entities/todo'

export const todos = {
    name: 'TodosQuery',
    description: 'Query todo list',
    type: new GraphQLList(todoType),
    args: {
        userId: {
            type: GraphQLID,
            description: 'The user id',
        },
    },
    resolve: async function(context, args) {
        let userId = new Types.ObjectId(args.userId);
        let results = await todoEntity.find({ userId });

        return results;
    },
};
