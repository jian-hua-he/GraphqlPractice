import express from 'express';
import graphqlHttp from 'express-graphql';

import schema from './graphql/schema';

export default {
    init: () => {
        const app = express();

        app.get('/', (req, res) => res.send('Hello World!'));

        app.use('/graphql', graphqlHttp({
            schema: schema,
            graphiql: true,
        }));

        app.listen(5000, () => console.log('Example app listening on port 5000!'));
    },
};