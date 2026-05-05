const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
  getBookingStats,
} = require("../controller/bookingController");

// All booking routes require authentication
router.use(authMiddleware);

router.post("/create", createBooking);
router.get("/my-bookings", getUserBookings);
router.get("/stats", getBookingStats);
router.get("/:id", getBookingById);
router.put("/:id/cancel", cancelBooking);

module.exports = router;