// Connecting to mongoDb

const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  const db = config.get('db');
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
  const con = mongoose.connection;

  con.on('open', () => {
    console.log(`Connected to MongoDB...${db}`)
  });

}