const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    userId: { 
        type: String, 
        required: true }
})

module.exports = mongoose.model('Plan', planSchema);