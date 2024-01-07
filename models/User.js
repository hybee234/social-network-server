const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'a username is required'],
            unique: [true, 'username already exists'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'an email is requied'],
            unique: [true, 'email already exists'],
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please Enter a valid Email Address"]

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            // getters: true,
        },
        id: false, // passed back just the _id value
    }
);

userSchema
.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('user', userSchema);
module.exports = User;

