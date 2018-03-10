import {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType
} from 'graphql';

import todoEntity from 'db/entities/todo';

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'User graphql Type',
    fields: () => {
        const todoType = require('graphql/todo/type').default;

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
                resolve: async function(user, args, info) {
                    return await todoEntity.find({ userId: user.id });
                },
            },
        };
    },
});

export default userType;
