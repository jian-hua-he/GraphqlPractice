import mongoose from 'mongoose';

import User from '../entities/user';
import Todo from '../entities/todo';

mongoose.connect('mongodb://mongo_server:27017/graphql');

exec();

async function exec() {
    await dropAll();

    let users = await seedUser();

    console.log('Seed user success');
    process.exit();
}

async function dropAll() {
    await User.remove({});
    await Todo.remove({});

    console.log('Drop data success');
}

async function seedUser() {
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

    for (let data of userData) {
        let user = new User(data);
        await user.save();
    }
}
