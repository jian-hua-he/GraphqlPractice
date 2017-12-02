import {
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType
} from 'graphql';

import userList from '../../db/fake/user.json';

const todoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo graphql type',
    fields: () => {
        let userType = require('../user/type').default;

        return {
            id: {
                description: 'Todo’s unique id',
                type: GraphQLID,
            },
            title: {
                description: 'Todo’s name',
                type: GraphQLString,
            },
            description: {
                description: 'Todo’s description',
                type: GraphQLString,
            },
            checked: {
                description: 'Check todo is completed',
                type: GraphQLBoolean,
            },
            user: {
                description: 'Owner data',
                type: userType,
                resolve: function(todo, args, info) {
                    return userList.find((user) => {
                        return user.id == todo.userId;
                    });
                },
            },
        };
    },
});

export default todoType;
