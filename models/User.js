const { Schema, model } = require('mongoose');
const { StringDecoder } = require('string_decoder');

const UserSchema = new Schema ({

    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true,
        match: [/.+@.+\..+/]
    },
    //add thoughts with array of _id values referencing the thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

//array of _id values referencing the user model (self-reference)
    friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'        
    }
]
},

    {
    toJSON: {
        virtuals: true,
    },
    id: false
    }
);


// retrieve the length of the user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});


//create model using schema
const User = model('User', UserSchema);

module.exports = User;