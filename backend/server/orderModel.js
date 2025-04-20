const orderSchema = {
    name: String,
    phone: String,
    items: Array,
    createdAt: { type: Date, default: Date.now },
  };
  
  module.exports = orderSchema;