const express = require("express");
const router = express.Router();
const adminAuthMiddleware = require("../middleware/adminAuthMiddleware");
const {
  getDashboardStats,
  getAllUsers,
  getAllBookings,
  updateBookingStatus,
  getAllContacts,
  updateContactStatus,
  deleteUser,
  deleteBooking,
} = require("../controller/adminController");

router.use(adminAuthMiddleware);
router.get("/stats", getDashboardStats);
router.get("/users", getAllUsers);
router.get("/bookings", getAllBookings);
router.put("/bookings/:id/status", updateBookingStatus);
router.get("/contacts", getAllContacts);
router.put("/contacts/:id/status", updateContactStatus);
router.delete("/users/:id", deleteUser);
router.delete("/bookings/:id", deleteBooking);

module.exports = router;