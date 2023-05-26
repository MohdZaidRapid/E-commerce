import express from 'express'
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFilterController, productListController, productPhotoController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';


const router = express.Router()

//routes

router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController)

router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController)

//get Product 
router.get("/get-product", getProductController)

//single-product
router.get("/get-product/:slug", getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController)

//delete photo
router.delete("/delete-product/:pid", deleteProductController)

//filter produuct
router.post("/product-filters", productFilterController)

//product count
router.get("/product-count", productCountController)

router.get("/product-list/:page",productListController)

export default router