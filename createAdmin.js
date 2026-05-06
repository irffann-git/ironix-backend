const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  isActive: Boolean
});
const Admin = mongoose.model("Admin", adminSchema);

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    
    await Admin.deleteMany({ email: "admin@ironix.com" });
    const hash = await bcrypt.hash("admin123", 10);
    await Admin.create({
      name: "Admin User",
      email: "admin@ironix.com",
      password: hash,
      role: "super-admin",
      isActive: true
    });
    console.log("✅ Admin created: admin@ironix.com / admin123");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
createAdmin();