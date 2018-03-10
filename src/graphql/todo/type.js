import {
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType
} from 'graphql';

import userEntity from 'db/entities/user';

const todoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo graphql type',
    fields: () => {
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
                type: require('graphql/user/type').default,
                resolve: async function(todo, args, info) {
                    return userEntity.findById(todo.userId);
                },
            },
        };
    },
});

export default todoType;
