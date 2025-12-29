import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'admin'
  },
  // Theme settings
  theme: {
    type: String,
    enum: ['blue', 'green', 'purple', 'red', 'orange', 'teal'],
    default: 'blue'
  },
  darkMode: {
    type: Boolean,
    default: false
  },
  compactMode: {
    type: Boolean,
    default: false
  },
  // Security settings
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  loginAlerts: {
    type: Boolean,
    default: true
  },
  sessionTimeout: {
    type: Number,
    default: 30 // minutes
  },
  // OTP for Master Admin
  otpMasterAdminEnabled: {
    type: Boolean,
    default: false
  },
  // System settings
  emailNotifications: {
    type: Boolean,
    default: true
  },
  autoBackup: {
    type: Boolean,
    default: true
  },
  maxRestaurants: {
    type: Number,
    default: 10
  },
  // Multi-user support
  assignedRestaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: false
  },
  // OTP settings
  otp: {
    type: String,
    required: false
  },
  otpExpires: {
    type: Date,
    required: false
  }
}, {
  timestamps: true
});

export const Admin = mongoose.model('Admin', adminSchema);
export type AdminType = mongoose.InferSchemaType<typeof adminSchema>;