const mongoose = require('mongoose');
const { User, Thought } = require('../models/index');


async function seedMockUsers() {
    try {

        const userData = [
            { "username": "abc", "email":"a@b.com" },
            { "username": "bcd", "email":"b@c.com" },
            { "username": "cdf", "email":"c@d.com" },
            { "username": "dfg", "email":"d@e.com" },
            { "username": "fgh", "email":"e@f.com" },
            { "username": "ghi", "email":"f@g.com" },
            { "username": "hij", "email":"g@h.com" },
            { "username": "ijk", "email":"h@i.com" },
            { "username": "jkl", "email":"i@j.com" },
        ];

        // save mock user data to the database
        const savedUsers = await User.create(userData);
        console.log(`${savedUsers.length} users created`);


        const thoughtText = [
            { "thoughtText":"asdf" , "username": "abc"},
            { "thoughtText":"aweg" , "username": "bcd"},
            { "thoughtText":"qwer" , "username": "cdf"},
            { "thoughtText":"reqw" , "username": "dfe"},
            { "thoughtText":"azxcvsdf" , "username": "feg"},
            { "thoughtText":"vdasre" , "username": "egh"},
            { "thoughtText":"zxcv" , "username": "ghi"},
            { "thoughtText":"aergcg" , "username": "hij"},
            { "thoughtText":"awergawe" , "username": "ijk"},

        ];

            await Thought.create(thoughtText);
            console.log(`${thoughtText.length} thoughts created`);

            // update the user with the created thoughts
            // user.thoughts = thoughts.map((thought) => thought._id);
            // await user.save();
            // };
    } catch (err) {
        console.error('Error seeding mock users', err);
    } 
};

async function connectAndSeed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to the database');

        await User.createIndexes(); // create indexes for the User model (username, email)
        await seedMockUsers();
    } catch (err) {
        console.error('Error connecting to the database', err);
    } finally {
        mongoose.disconnect();
        console.log('Disconnected from the database');
    }
};

connectAndSeed();