const mongoose = require('mongoose');
require('dotenv').config(); // Load biến môi trường từ .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Dừng server nếu lỗi
  }
};

module.exports = connectDB;

