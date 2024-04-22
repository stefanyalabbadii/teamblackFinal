const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Restaurant');
const Restaurant = mongoose.model('restaurants');

// Root Route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Get all restaurants in database
router.get('/restaurants', async (req, res) => {
    try {
        let filter = {};
        if (req.query.city) {
            filter = { city: req.query.city };
        }
        const restaurants = await Restaurant.find(filter);
        console.log(restaurants);
        res.json(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get a specific restaurant by ID
router.get('/restaurants/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Add more routes for other CRUD operations as needed

module.exports = router;
