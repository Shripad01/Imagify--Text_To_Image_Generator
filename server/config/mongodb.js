import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGO_URI / MONGODB_URI is not defined in environment');

    // Use the connection string exactly as provided in .env (include DB name there if needed)
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message || err);
    throw err;
  }
};

export default connectDB;