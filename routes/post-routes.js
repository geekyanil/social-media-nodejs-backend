const express = require("express");
const {
  createPost,
  likeAndDislike,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post-controllers");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndDislike)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router
  .route("/post/comment/:id")
  .put(isAuthenticated, commentOnPost)
  .delete(isAuthenticated, deleteComment);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

module.exports = router;
