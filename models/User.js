const { Schema, model } = require('mongoose');
const { StringDecoder } = require('string_decoder');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'Username is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts:{
//add thoughts with array of _id values referencing the thought model
    },
    friends: {
        //array of _id values referencing the user model (self-reference)
    },
});

//create model using schema
const User = model('User', UserSchema);

module.exports = User;