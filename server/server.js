//Import Packages
var express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//Import files
const middleware = require(__dirname + '/../controllers/middleware.js');
const mainCtrl = require(__dirname + '/../controllers/mainCtrl.js');

//Set up App skeleton


app.use(middleware.addHeaders);

//Where the magic happens

app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getOccupationsLatest);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbies)

app.get('/family', mainCtrl.getFamily)

app.get('/family/:gender', mainCtrl.getFamily)

app.get('/restaurants', mainCtrl.getRestaurants)

app.get('/restaurants/:name', mainCtrl.getRestaurants)







const port = 3005;
app.listen(port, () =>{console.log(`Successfully running on port ${port}`)})
