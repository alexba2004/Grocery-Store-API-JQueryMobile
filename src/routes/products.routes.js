import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, updateProduct } from "../controllers/products.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:bc", getOneProduct);
router.get("/delete/:bc", deleteProduct);
router.post("/save", insertProduct);
router.post("/:bc", updateProduct);

export default router;
