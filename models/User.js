const { Schema, model } = require('mongoose');
const { StringDecoder } = require('string_decoder');

const UserSchema = new Schema ({

    userName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
        // required: 'Email is required',
        // unique: true,
        // match: [/.+@.+\..+/]
    },
    //thoughts:{
//add thoughts with array of _id values referencing the thought model
    //},
   // friends: {
        //array of _id values referencing the user model (self-reference)
    //},
});

//create model using schema
const User = model('User', UserSchema);

module.exports = User;