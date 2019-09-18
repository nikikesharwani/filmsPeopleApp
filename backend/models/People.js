const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let People = new Schema({
   name: {
      type: String
   },
   updated_at: {
      type: Date
   },
   __v: {
       type: Number
   },
   actor: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false}),
   composer: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false}),
   cinematographer: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false}),
   director: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false}),
   producer: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false}),
   screenwriter: new Schema({
        picture: {
            type: String
        },
        gross: {
            type: Number
        },
        average: {
            type: Number
        },
        movies: {
            type: Number
        },
        total_gross: {
            type: Number
        },
        rank: {
            type: Number
        }
   }, {strict: false})
}, {
   collection: 'People'
});

module.exports = mongoose.model('People', People);