// Imports
const { Firestore } = require('@google-cloud/firestore');
const cors = require('cors')();

// Cloud Function
exports.addRestaurantToFavorite = async (req, res) => {
    cors(req, res, async () => {
        try {
            const { name, city } = req.body;
            console.log("Body" + req.body);

            // Firestore Connection
            const firestore = new Firestore({
                projectId: "sp24-41200-teamblack-project"
            });

            // Object
            const data = {
                Restaurant: name,
                City: city
            };

            // Console
            console.log(data);

            // Write to Firestore 
            const collectionRef = firestore.collection('favorites');
            const documentRef = await collectionRef.add(data);

            res.status(200).send({
                message: 'Restaurant added successfully',
                restaurantId: documentRef.id
            });
        } catch (error) {
            console.error('Error adding restaurant:', error);
            res.status(500).send('Error adding restaurant');
        }
    });
};
