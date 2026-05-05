const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} = require("../controller/contactController");

// Public route
router.post("/submit", submitContact);

// Admin only routes (add authMiddleware for protection)
router.get("/all", authMiddleware, getAllContacts);
router.get("/:id", authMiddleware, getContactById);
router.put("/:id/status", authMiddleware, updateContactStatus);
router.delete("/:id", authMiddleware, deleteContact);

module.exports = router;