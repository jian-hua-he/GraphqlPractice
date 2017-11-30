import {
    GraphQLString,
} from 'graphql';

let hello = {
    type: GraphQLString,
    resolve: function() {
        return 'world';
    },
};

export default hello;