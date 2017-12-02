import {
    GraphQLString,
    GraphQLList
} from 'graphql';

import todoType from './type';

let fakeData = [
    {
        id: 1,
        title: 'Clean House',
        description: 'This house is too dirty. Should clean it up',
        checked: true,
    },
    {
        id: 1,
        title: 'Buy some food',
        description: 'We don’t have any food in our storage. Go to market and buy some',
        checked: false,
    },
];

export let todos = {
    type: new GraphQLList(todoType),
    resolve: function() {
        return fakeData;
    },
};
