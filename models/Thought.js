const { Schema, model, Types } = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');

const ReactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId() 
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
    reaction: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length
});

const Reaction = model('Reaction', ReactionSchema);
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought