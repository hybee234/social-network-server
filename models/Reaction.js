const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: String,
            required: true
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,            
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {     
            type: Date,
            default: Date.now,
            // get: function(value) {
            //     return value.toDateString()
            // }
        },
    },
    {
        toJSON: {       
            getters: true,
        },
        id: false, // passed back just the _id value
    }
);

module.exports = { reactionSchema };