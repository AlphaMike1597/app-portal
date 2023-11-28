import express from "express";
import { createContact, getContact, getContactById, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
    .post(createContact)
    .get(getContact)


router.route('/:id')
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact)

export default router;