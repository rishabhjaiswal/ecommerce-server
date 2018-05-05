const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched"
  });
});

router.post('/', (req, res, next) => {
  const order = {
    name: req.body.productId,
    price: req.body.quantity
  }
  res.status(201).json({
    message: "Orders were created",
    createdOrder: order
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "Orders details",
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "Orders deleted"
  });
});

module.exports = router;