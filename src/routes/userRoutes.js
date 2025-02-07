import express from "express";
import {
  registerUser,
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/registerUser").post(registerUser);
router.route("/readUser").post(readUser);
router.route("/updateUser").post(updateUser);
router.route("/deleteUser").post(deleteUser);

export default router;
