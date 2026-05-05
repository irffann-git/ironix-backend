require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const adminRoutes = require("./routes/adminRoutes");

const PORT = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173", "https://ironix.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// Routes

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin", adminRoutes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});