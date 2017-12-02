import {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType
} from 'graphql';

import todoList from '../../db/fake/todo.json';

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'User graphql Type',
    fields: () => {
        const todoType = require('../todo/type').default;

        return {
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
            todos: {
                description: 'User’s todo list',
                type: new GraphQLList(todoType),
                resolve: function(user, args, info) {
                    return todoList.filter((todo) => {
                        return todo.userId == user.id;
                    });
                },
            },
        };
    },
});

export default userType;
