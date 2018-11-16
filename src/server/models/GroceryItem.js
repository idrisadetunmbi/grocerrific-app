import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter an item name'],
    minlength: 3,
    maxlength: 25,
  },
  purchased: { type: Boolean, default: false },
});

export default mongoose.model('GroceryItem', schema, 'grocery_items');
