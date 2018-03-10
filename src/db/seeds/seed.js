import mongoose from 'mongoose';

import User from '../entities/user';
// import Todo from '../entities/todo';

mongoose.connect('mongodb://mongo_server:27017/graphql');

exec();

function exec() {
    dropAll();

    let userData = [
        {
            name: "Edna R. Grimaldi",
            email: "edna.r.grimaldi@example.com",
        },
        {
            name: "Nicholas Murphy",
            email: "nicholas.murphy@example.com",
        },
        {
            name: "Camille J. Riddle",
            email: "camille.riddle@example.com",
        }
    ];

    userData.forEach((data) => {
        let user = new User(data);
        user.save();
    });

    process.exit();
}

function dropAll() {
    // Drop all collections
    User.remove({}, (err) => {
        console.error('Drop user collection failed');
    });

    // Todo.remove({}, (err) => {
    //     console.log('Drop todo collection failed');
    // });
}