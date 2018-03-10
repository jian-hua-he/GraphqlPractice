import mongoose from 'mongoose';

import User from '../entities/user';
import Todo from '../entities/todo';

exec();

async function exec() {
    mongoose.connect('mongodb://mongo_server:27017/graphql');

    await dropAll();

    let users = await seedUsers();
    let todos = await seedTodos(users);

    process.exit();
}

async function dropAll() {
    console.log('[DROP]: Start to drop data');

    await User.remove({});
    await Todo.remove({});

    console.log('[DROP]: Drop data successed');
}

async function seedUsers() {
    console.log('[SEED]: Start to seed user data');

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
    let results = [];

    for (let data of userData) {
        let user = new User(data);
        await user.save();
        results.push(user);
    }

    console.log('[SEED]: Save user data successed');

    return results;
}

async function seedTodos(users) {
    console.log('[SEED]: Start to seed todo data');

    let todoData = [
        {
            title: "Clean House",
            description: "This house is too dirty. Should clean it up",
            checked: true,
        },
        {
            title: "Buy some food",
            description: "We don’t have any food in our storage. Go to market and buy some",
            checked: false,
        },
        {
            title: "Upgrade OS to newest version",
            description: "Our OS is too old. Should upgrade to prevent malicious attacks",
            checked: false,
        },
        {
            title: "Prepare Christmas present",
            description: "It’s important. Don’t forget!!!",
            checked: true,
        },
        {
            title: "Go to the GP concert with my friend",
            description: "I wish I can have day off at that day",
            checked: true,
        },
    ];

    todoData = todoData.map((data) => {
        // Pick random user
        let user = users[Math.floor(Math.random() * users.length)];

        return {
            userId: user.id,
            title: data.title,
            description: data.description,
            checked: data.checked,
        };
    });

    for (let data of todoData) {
        let todo = new Todo(data);
        await todo.save();
    }

    console.log('[SEED]: Save todo data successed');
}
