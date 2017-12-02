import {
    GraphQLString,
    GraphQLList
} from 'graphql';

import todoType from './type';
import fakeData from './data.json';

export let todos = {
    type: new GraphQLList(todoType),
    resolve: function() {
        return fakeData;
    },
};
