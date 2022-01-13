const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  commpleted: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
