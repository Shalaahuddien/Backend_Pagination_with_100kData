import express from "express";
import { getUsers } from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUsers);

export default router;

