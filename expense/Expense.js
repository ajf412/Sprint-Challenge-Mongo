const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
  description: { type: String, required: true, index: true },
  amount: { type: Number, required: true },
  budget_key: Number,
  category_key: Number,
  budget: { 
    type: ObjectId, 
    ref: 'Budget',
  },
  category: {
    type: ObjectId,
    ref: 'Category',
  }
});

module.exports = mongoose.model('Expense', Expense);