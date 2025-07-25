const express = require("express");
const { register, login } = require("../controllers/authController");
const { auth, adminOnly } = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, (req, res) => {
  res.json({ msg: "Welcome", user: req.user });
});
router.get("/admin", auth, adminOnly, (req, res) => {
  res.json({ msg: "Admin route" });
});

module.exports = router;
