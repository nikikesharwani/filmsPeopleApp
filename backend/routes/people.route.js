const express = require('express');
const app = express();
const peopleRoute = express.Router();

// Person model
let People = require('../models/People');

// Add Person to people collection
peopleRoute.route('/create').post((req, res, next) => {
  People.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Get All Persons list
peopleRoute.route('/').get((req, res) => {
  People.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Get single person by id
peopleRoute.route('/read/:id').get((req, res) => {
  People.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});


// Update person 
peopleRoute.route('/update/:id').put((req, res, next) => {
  People.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  });
});

// Delete person by id
peopleRoute.route('/delete/:id').delete((req, res, next) => {
    People.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  })
  
  module.exports = peopleRoute;