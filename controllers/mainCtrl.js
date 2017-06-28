var user = require('./user.js');
var exports = module.exports = {}

exports.getName = (req, res) => {
  res.json(user.name)
}

exports.getLocation = (req, res) => {
  res.json(user.location);
}

exports.getOccupations = (req, res) => {
  switch(req.query.order){
    case "desc":
      res.json(user.occupations.sort());
      break;

    case "asc":
      res.json(user.occupations.sort().reverse());
      break;

    default:
      res.json(user.occupations);
  }
}

exports.getOccupationsLatest = (req, res) => {
  res.json(user.occupations[user.occupations.length -1])
}

exports.getHobbies = (req, res) => {
  if(req.params.type){
    res.json(user.hobbies.filter( (elem) => {
      return elem.type === req.params.type
    }))
  }
  else {
    res.json(user.hobbies);
  }
}


exports.getFamily = (req, res) => {
  if (req.params.gender) {
    res.json(user.family.filter( (elem) => {
      return elem.gender === req.params.gender;
    }));
  }
  else {
    res.json(user.family);
  }
}

exports.getRestaurants = (req, res) => {
  console.log(req.params)
  if( req.params.name) {
    console.log("inside If")
    res.json(user.restaurants.filter( (elem, i) => {
      return elem.name == req.params.name
    }))
  }
  else {
    res.json(user.restaurants);
  }
}
