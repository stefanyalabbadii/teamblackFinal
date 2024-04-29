// Import packages
const express = require('express');
const path = require('path');


  // Set the port
  const port = 8080;

  // Create instances of necessary packages
  const app = express();



  // Middleware
  app.use('/js', express.static(__dirname + '/public/js'));
  app.use('/css', express.static(__dirname + '/public/css'));
  app.use('/images', express.static(__dirname + '/public/images'));


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});



app.post('/results',(req, res) => {
  //Ensure that a city was entered

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Restaurant App listening on port ${port}`);
});