const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
    id: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    dob: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    createdAt: {
        type: String,
        default: Date.now
    }
}))

module.exports = User