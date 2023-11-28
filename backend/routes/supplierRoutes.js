import express from "express";
import { createSupplier, getSupplier, getSupplierId, updateSupplier, deleteSupplier} from '../controllers/supplierController.js'

const router = express.Router();

router.route('/')
    .post(createSupplier)
    .get(getSupplier)


router.route('/:id')
    .get(getSupplierId)
    .put(updateSupplier)
    .delete(deleteSupplier)

export default router