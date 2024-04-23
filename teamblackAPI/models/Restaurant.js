const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    cuisines: {
        type: String
    },
    pickup_enabled: {
        type: Boolean
    },
    delivery_enabled: {
        type: Boolean
    },
    weighted_rating_value: {
        type: Number
    },
    aggregated_rating_count: {
        type: Number
    }
});

// Change this model name depending what it's called in MongoDB
mongoose.model('restaurants', RestaurantSchema);