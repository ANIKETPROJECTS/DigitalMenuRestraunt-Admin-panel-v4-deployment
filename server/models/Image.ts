import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  data: {
    type: String, // Base64 encoded image data
    required: true
  },
  mimeType: {
    type: String,
    default: 'image/jpeg'
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 * 30 // Auto-delete after 30 days if not referenced
  }
});

export const Image = mongoose.model('Image', imageSchema);
export type ImageType = mongoose.InferSchemaType<typeof imageSchema>;
