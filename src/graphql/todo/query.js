import {
    GraphQLList
} from 'graphql';

import todoType from './type';
import fakeData from './data.json';

export let todos = {
    name: 'TodosQuery',
    description: 'Query todo list',
    type: new GraphQLList(todoType),
    resolve: function() {
        return fakeData;
    },
};
