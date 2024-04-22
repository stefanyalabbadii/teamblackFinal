const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price_level: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

// Change this model name depending what it's called in MongoDB
mongoose.model('restaurants', RestaurantSchema);