const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "process get request for products"
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "process post request for products"
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id == 'special') {
    res.status(200).json({
      message: "special id found"
    });
  } else {
    res.status(200).json({
      message: "you sent an id",
      id: id
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "updated products"
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "deleted products"
  });
});

module.exports = router;