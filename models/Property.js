const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  name: String,
  role: String,
  photo: String,
  phone: String,
  email: String,
});

const PropertySchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  videoTour: String,
  location: String,
  type: String,
  purpose: String,
  price: Number,
  appointmentFee: Number,
  size: {
    bedrooms: Number,
    bathrooms: Number,
    dimensions: String,
  },
  tags: [String],
  amenities: [String],
  agent: AgentSchema,
  isActive: Boolean,
  isFeatured: Boolean,
  datePosted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', PropertySchema); 