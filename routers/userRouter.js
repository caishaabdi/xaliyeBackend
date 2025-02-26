import express from "express";
import { getUserById, login, register } from "../controllers/userControlle.js";

const router = express.Router()
router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserById);

// router.route('/register').post(register);
// router.route('/login').post(login);

export default router