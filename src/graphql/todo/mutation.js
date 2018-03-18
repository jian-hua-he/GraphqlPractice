import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';
import { Types } from 'mongoose';

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

export const clickTodo = {
    name: 'ClickTodo',
    description: 'Click todo',
    type: todoType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'Todo’s ID',
        },
    },
    resolve: async function (context, args) {
        let todoId = new Types.ObjectId(args.id);
        let todo = await Todo.findById(todoId);

        todo.checked = !todo.checked;

        await todo.save();

        return todo;
    },
}
