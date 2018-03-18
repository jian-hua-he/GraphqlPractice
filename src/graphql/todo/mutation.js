import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import todoType from './type';

import Todo from 'db/entities/todo';

export const createTodo = {
    name: 'CreateTodo',
    description: 'Add a single todo',
    type: todoType,
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The user’s ID',
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The todo’s title',
        },
        description: {
            type: GraphQLString,
            description: 'The todo’s description',
            defaultValue: '',
        },
    },
    resolve: async function (context, args) {
        let todo = new Todo({
            userId: args.userId,
            title: args.title,
            description: args.description,
            checked: false,
        });

        await todo.save();

        return todo;
    },
};
