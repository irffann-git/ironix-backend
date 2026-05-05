// create-test-user.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

async function createTestUser() {
  try {
    await mongoose.connect("mongodb://localhost:27017/IronixDB");
    console.log("✅ Connected");

    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
      phone: String,
      bio: String,
      profileImage: String,
      membership: String,
      joinDate: Date,
    });

    const User = mongoose.model("User", userSchema);

    // Delete existing
    await User.deleteMany({ email: "user@example.com" });

    // Create new user
    const hash = await bcrypt.hash("123456", 10);
    
    await User.create({
      name: "Test User",
      email: "user@example.com",
      password: hash,
      phone: "9876543210",
      bio: "Test user bio",
      profileImage: "https://i.pravatar.cc/150",
      membership: "Premium",
      joinDate: new Date(),
    });

    console.log("\n✅ Test User created!");
    console.log("📧 Email: user@example.com");
    console.log("🔑 Password: 123456");

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

createTestUser();