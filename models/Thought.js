const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
    //reactions
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought