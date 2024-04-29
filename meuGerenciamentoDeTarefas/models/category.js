const mongoose = require ('mongoose');

const CategorySchema = new mongoose.schema ({
    name: {type: String, require: true},
    color: String
});

const category = mongoose.model('category', CategorySchema);

module.exports = category;