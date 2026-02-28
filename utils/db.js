const mongoose = require('mongoose');

const urlDb = 'mongodb://127.0.0.1:27017/db-movies';

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log('Connected with db successfully');
  } catch (error) {
    console.log('Error connecting to db:', error.message);
  }
};

module.exports = {
  connect
};