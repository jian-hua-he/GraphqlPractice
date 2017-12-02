import {
    GraphQLID,
    GraphQLList
} from 'graphql';

import todoType from './type';
import todoList from '../../db/fake/todo.json';

export let todos = {
    name: 'TodosQuery',
    description: 'Query todo list',
    type: new GraphQLList(todoType),
    args: {
        userId: {
            type: GraphQLID,
            description: 'The user id',
        },
    },
    resolve: function(context, args) {
        let result = todoList;

        if (args.userId) {
            result = todoList.filter((todo) => {
                return todo.userId == args.userId;
            });
        }

        return result;
    },
};
