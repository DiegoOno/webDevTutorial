const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  // options
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});