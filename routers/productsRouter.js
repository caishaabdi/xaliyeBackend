import express from "express";
import { createProduct, deleteProduct, GetAllProducts, GetProduct, UpdateProductById } from "../controllers/productController.js";

const router = express.Router()

router.post('/createProduct', createProduct);
router.get('/all', GetAllProducts);
router.get('/one', GetProduct);
router.put('/:id', UpdateProductById);
router.delete('/:id', deleteProduct);


export default router