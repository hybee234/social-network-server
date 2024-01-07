const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction')

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: [280, 'thoughtText must be between 1-280 characters long'],
            minlength: [1, 'thoughtText must be between 1-280 characters long'],
        },
        createdAt: {     
            type: Date,
            default: Date.now,
            get: function(value) {
                return value.toLocaleString()
            }
        },
        username:{
            type: String,
            required: true,
        },
        reactions: [reactionSchema],            
    },
    {
        toJSON: {       
            virtuals: true,     
            getters: true,
        },
        id: false, // passed back just the _id value
    }
);

thoughtSchema
.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);
module.exports = Thought;

