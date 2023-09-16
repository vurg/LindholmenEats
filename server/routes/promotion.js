const express = require('express');

const router = express.Router();

const promotionController = require('../controllers/promotion');

router.post("/", promotionController.postProduct);

router.get("/", promotionController.getAllProducts); 

router.get("/:id", promotionController.getProduct)

router.put("/:id", promotionController.updateProduct);

router.patch("/:id", promotionController.patchProduct);

router.delete("/:id", promotionController.deleteProduct);

router.delete("/", promotionController.deleteProduct);

module.exports = router;