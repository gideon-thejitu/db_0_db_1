import express from "express";
import {usersController} from "../controllers/users.controller";

const router = express.Router();

router.post('/', usersController.create)

export default router;
