// Imports
const { Firestore } = require('@google-cloud/firestore');
const cors = require('cors')();

exports.removeRestaurantFromFavorites = async (req, res) => {
    cors(req, res, async () => {
        try {
            const {name, city} = req.body;
            console.log('Request body:', req.body);
            console.log(city);

            // Firestore Connection
            const firestore = new Firestore({
                projectId: "sp24-41200-teamblack-project"
            });
            
            const collectionRef = firestore.collection('favorites');
            const querySnapshot = await collectionRef
                .where('Restaurant', '==', name)
                .where('City', '==', city)
                .get();
          
            if (!querySnapshot.empty) {
                // Deletes documents if its found
                const documentSnapshot = querySnapshot.docs[0];
                await documentSnapshot.ref.delete();
                res.status(200).send({
                    message: 'Restaurant removed!'
                });
            } else {
                // If the document does not exist, notify that it was not found
                res.status(404).send({
                    message: 'Restaurant not found in favorites'
                });
            }
        } catch (error) {
            console.error('Error removing restaurant:', error);
            res.status(500).send('Error removing restaurant');
        }
    });
};