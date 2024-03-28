const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hangyuan:15993654923@cluster0.lf4jy3a.mongodb.net/your_database').then(() => console.log('Connected to MongoDB successfully'));
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
};

module.exports = connectDB;
