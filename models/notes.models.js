const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})

const model = new mongoose.model('Note',notesSchema)

module.exports = model