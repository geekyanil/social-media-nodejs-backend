const express = require("express");
// const { route } = require("../app");
const {
  forgotPassword,
  resetPassword,
} = require("../controllers/post-controllers");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
} = require("../controllers/user-controller");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/me").get(isAuthenticated, myProfile);
router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

module.exports = router;
