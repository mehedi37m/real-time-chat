import express from "express";
import { login, logout, sighup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", sighup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
