import { GraphQLScalarType } from 'graphql/type';

const Email = new GraphQLScalarType({
    name: 'Email',
    description: 'Email scalar type',
    serialize: function (value) {
        if (isValid(value)) {
            return value;
        }

        return null;
    },
    parseValue: function (value) {
        if (isValid(value)) {
            return value;
        }

        return null;
    },
    parseLiteral: function (ast) {
        return ast.value;
    },
});

function isValid(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
}

export default Email;
