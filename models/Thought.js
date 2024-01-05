const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction')

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {     
            type: Date,
            default: Date.now,
            get: function(value) {
                return value.toDateString()
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
const handleError = (err) => console.error(err);
module.exports = Thought;

