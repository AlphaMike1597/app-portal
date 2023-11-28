import express from "express";
import { createUser, getUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router();

router.route('/')
    .post(createUser)
    .get(getUser)

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


export default router;