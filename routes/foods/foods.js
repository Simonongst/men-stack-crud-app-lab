const express = require('express');
const router = express.Router();
const { getAllFoods, createFood, getFoodById, updateFood, deleteFood } = require('../../controllers/FoodController');

router.get('/', getAllFoods);
router.post('/', createFood);
router.get('/:id', getFoodById);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;