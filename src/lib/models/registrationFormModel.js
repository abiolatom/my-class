import mongoose from 'mongoose';

const registrationFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  country: String,
  city: String,
  skillLevel: String,
  additionalInfo: String,
  createdAt: { type: Date, default: Date.now }, // Add a timestamp for tracking
});

export default mongoose.models.registrationFormSchema || mongoose.model('Participant', registrationFormSchema);
