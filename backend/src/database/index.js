const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
