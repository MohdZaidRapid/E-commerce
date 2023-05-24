import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//route object
const router = express.Router();

//routing
//Register|| Method POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController)

//test router
router.get("/test", requireSignIn, isAdmin, testController);

//protected Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
})

export default router;
