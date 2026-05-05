const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { 
  register, 
  login, 
  getCurrentUser, 
  updateProfile,
  updateProfileWithImage
} = require("../controller/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getCurrentUser);
router.put("/profile", authMiddleware, updateProfile);
router.put("/profile/image", authMiddleware, upload.single("image"), updateProfileWithImage);

module.exports = router;