import express from 'express';
import graphqlHttp from 'express-graphql';
import mongoose from 'mongoose';

import schema from 'graphql/schema';

export default {
    init: () => {
        const app = express();

        mongoose.connect('mongodb://mongo_server:27017/graphql');

        app.get('/', (req, res) => res.send('Hello World!'));

        app.use('/graphql', graphqlHttp({
            schema: schema,
            graphiql: true,
        }));

        app.listen(5000, () => console.log('Example app listening on port 5000!'));
    },
};