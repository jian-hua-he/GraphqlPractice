import {
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType
} from 'graphql';

import userType from '../user/type';
import userList from '../../db/fake/user.json';

let todoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo graphql type',
    fields: {
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
    },
});

export default todoType;
