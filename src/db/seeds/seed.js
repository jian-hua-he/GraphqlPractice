import mongoose from 'mongoose';

import User from '../entities/user';
import Todo from '../entities/todo';

mongoose.connect('mongodb://mongo_server:27017/graphql');

exec();

function exec() {
    dropAll().then(() => {
        console.log('Drop data success');

        seedUser().then((users) => {
            console.log('Seed user success');
            process.exit();
        });
    });
}

function dropAll() {
    let dropPromises = [];

    dropPromises.push(User.remove({}));
    dropPromises.push(Todo.remove({}));

    return Promise.all(dropPromises);
}

function seedUser() {
    let userData = [
        {
            name: 'Edna R. Grimaldi',
            email: 'edna.r.grimaldi@example.com',
        },
        {
            name: 'Nicholas Murphy',
            email: 'nicholas.murphy@example.com',
        },
        {
            name: 'Camille J. Riddle',
            email: 'camille.riddle@example.com',
        },
    ];
    let userPromises = [];

    userData.forEach((data) => {
        let user = new User(data);
        userPromises.push(user.save());
    });

    return Promise.all(userPromises);
}
