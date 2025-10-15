const Food = require("../models/food.js");

async function getAllFoods(req, res) {
  const foods = await Food.find();
  return res.json(foods);
}

async function createFood(req, res) {
    const { name, description } = req.body;
    if(!name || !description) {
        return res.status(400).send('Name and description are required');
    }
    const newFood = await Food.create({name, description});
    return res.status(201).json(newFood);
}

async function getFoodById(req, res) {

    const food = await Food.findById(req.params.id);
    if (food) {
        res.json(food);
    } else {
        res.status(404).send('Food not found');
    }
}

async function updateFood(req, res) {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedFood) {
        res.json(updatedFood);
    } else {
        res.status(404).send('Food not found');
    }
}

async function deleteFood(req, res) {

    const deletedFood = await Plant.findByIdAndDelete(req.params.id);
    if (deletedFood) {
        res.sendStatus(204);
    } else {
        res.status(404).send('Food not found');
    }
}

module.exports = {
    getAllFoods,
    createFood,
    getFoodById, updateFood, deleteFood
};